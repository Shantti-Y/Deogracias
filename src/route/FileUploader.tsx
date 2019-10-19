import React, { FC, useState } from 'react';
import { DeograciasDB, DeograciasTable } from '@/util/database';

enum ImageLocation {
  Local = 1,
  Remote = 2
}

interface LocalImagePathFormProps {
  fileSelected: (imagePaths: string[]) => void
}
const LocalImagePathForm: FC<LocalImagePathFormProps> = props => {
	const handleFileSelected = (fileImagePathInline: string) => {
		const imagePaths = fileImagePathInline.split(';');
		props.fileSelected(imagePaths);
	};

	return (
		<div>
			<label>LocalImageSetting</label>
			<input id="fileInput"
				type="file"
				accept="image/*"
				multiple
				onChange={e => handleFileSelected(e.target.value)}
			/>
		</div>
	);
};

interface RemoteImagePathFormProps {
  fileSelected: (imagePaths: string[]) => void
}
const RemoteImagePathForm: FC<RemoteImagePathFormProps> = props => {
	const [crawlerSetting, setCrawlerSetting] = useState({
		siteUrl: '',
		xHtmlSelector: ''
	});
	const [pathInline, setPathInline] = useState('');

	const updateInlineImagePaths = (inputText: string) => {
		setPathInline(inputText);
	};
	const submitInlineImagePaths = () => {
		props.fileSelected(pathInline.split(/\n/));
		setPathInline('');
	};

	const updateCrawlerSetting = (fieldName: string, inputText: string) => {
		const newCrawlerSetting = {
			...crawlerSetting,
			[fieldName]: inputText
		};
		setCrawlerSetting(newCrawlerSetting);
	};
	// TODO: Add puppeeter crawling image insertion

	return (
		<div>
			<label>RemoteImageSetting</label>
			<div className="direct-text">
				<label>DirectText</label>
				<textarea
					value={pathInline}
					onChange={e => updateInlineImagePaths(e.target.value)}
				></textarea>
				<button onClick={submitInlineImagePaths}>
          Insert Images
				</button>
			</div>
			<div className="crawler">
				<label>SiteUrl</label>
				<input type="text" onChange={e => updateCrawlerSetting('siteUrl', e.target.value)} value={crawlerSetting.siteUrl} />
				<label>XHtmlSelector</label>
				<input type="text" onChange={e => updateCrawlerSetting('xHtmlSelector', e.target.value)} value={crawlerSetting.xHtmlSelector} />
			</div>
		</div>
	);
};

interface ImagePreviewProps {
  imageSrc: string,
  removeClicked: () => void
}
const ImagePreview: FC<ImagePreviewProps> = props => {
	const handleRemoveButtonClicked = () => {
		props.removeClicked();
	};

	return (
		<div>
			<img
				width="100"
				height="100"
				src={`${props.imageSrc}`}
				alt={`${props.imageSrc}`}
			/>
			<button onClick={handleRemoveButtonClicked}>Remove</button>
		</div>
	);
};

interface FileUploaderProps {}
const FileUploader: FC<FileUploaderProps> = props => {
	const [imagePaths, setImagePaths] = useState([]);
	const [mangaName, setMangaName] = useState('');

	const insertImagePaths = (additionalImagePaths: string[], imageLocation: ImageLocation) => {
		const fomattedImagePaths = additionalImagePaths
			.filter(additionalImagePath => validateImagePathExtension(additionalImagePath))
			.map(additionalImagePath => normalizeImagePath(additionalImagePath, imageLocation));
		const newImagePaths = Object.assign([], imagePaths.concat(fomattedImagePaths as never[]));
		setImagePaths(newImagePaths);
	};
  
	// Remove choosen FileImagePath from state
	const removeImagePath = (imageIdx: number) => {
		const newImagePaths = Object.assign([], imagePaths);
		newImagePaths.splice(imageIdx, 1);
		setImagePaths(newImagePaths);
	};
	/*
	 * Swap FileImagePath order which means Manga's page number
	 * private: format FileImagePath with protocol prefixes such as file:// or https://
	 */
	const normalizeImagePath = (imageUrl: string, imageLocation: ImageLocation) => {
		switch (imageLocation) {
		case ImageLocation.Local:
			return `file://${imageUrl}`;
		case ImageLocation.Remote:
			return imageUrl;
		}
	};

	const validateImagePathExtension = (imageUrl: string) => RegExp(/.+[jpg|gif|png]$/).test(imageUrl);

	// Change Manga's name
	const updateMangaName = (inputText: string) => {
		setMangaName(inputText);
	};

	// Save Manga
	const addNewManga = () => {
		const mangaPages: MangaPageEntity[] = imagePaths.map(imagePath => ({ url: imagePath }));

		const manga: MangaEntity = {
			name: mangaName,
			pages: mangaPages,
			tagIds: []
		};
    
		(new DeograciasDB).insertEntity(DeograciasTable.Mangas, manga);
	};

	return (
		<div id="file-uploader">
			<hr />
			<LocalImagePathForm
				fileSelected={localImagePaths => insertImagePaths(localImagePaths, ImageLocation.Local)}
			/>
			<hr />
			<RemoteImagePathForm
				fileSelected={remoteImagePaths => insertImagePaths(remoteImagePaths, ImageLocation.Remote)}
			/>
			<hr />
			<div>
				<label>Name</label>
				<input
					type="text"
					value={mangaName}
					onChange={e => updateMangaName(e.target.value)}
				/>
			</div>
			<hr />
			<div id="output">
				{imagePaths.map((imagePath, idx) => 
					<ImagePreview
						imageSrc={imagePath}
						key={idx}
						removeClicked={() => removeImagePath(idx)}
					/>)}
			</div>
			<button onClick={addNewManga}>Add New Manga</button>
		</div>
	);
};
export default FileUploader;