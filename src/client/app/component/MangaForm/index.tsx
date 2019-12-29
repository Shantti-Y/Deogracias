import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import { Button } from 'primereact/button';

import NameInput from '@appComponent/MangaForm/NameInput';
import LocalUrlInput from '@appComponent/MangaForm/LocalUrlInput';
import RemoteUrlInput from '@appComponent/MangaForm/RemoteUrlInput';
import ImageUrlPreviewList from '@appComponent/MangaForm/ImageUrlPreviewList';
import TagsInput from '@appComponent/MangaForm/TagsInput';

enum ImageLocation {
  Local = 1,
  Remote = 2
}
interface ComponentStateProps {}
interface ComponentDispatchProps {}
interface ComponentOwnProps {
  initialManga?: MangaEntity;
  onSubmit: (manga: MangaEntity) => void;
}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangaForm: FC<ComponentProps> = props => {
	const [name, setName] = useState('' as string);
	const [imageUrls, setImageUrls] = useState([] as string[]);
	const [tagIds, setTagIds] = useState([] as number[]);

	useEffect(() => {
		if (props.initialManga) {
			setName(props.initialManga.name);
			setImageUrls(props.initialManga.pages.map(page => page.url)),
			setTagIds(props.initialManga.tagIds);
		}
	}, [props.initialManga]);

	const insertImageUrls = (additionalImageUrls: string[], imageLocation: ImageLocation) => {
		const formattedImageUrls = additionalImageUrls
			.filter(formattedImageUrl => validateImageUrlExtension(formattedImageUrl))
			.map(formattedImageUrl => normalizeImageUrl(formattedImageUrl, imageLocation));
		const newImagePaths = Object.assign([], imageUrls.concat(formattedImageUrls as never[]));
		setImageUrls(newImagePaths);
	};

	const validateImageUrlExtension = (imageUrl: string) => RegExp(/.+[jpg|gif|png]$/).test(imageUrl);

	const normalizeImageUrl = (imageUrl: string, imageLocation: ImageLocation) => {
		switch (imageLocation) {
		case ImageLocation.Local:
			return `file://${imageUrl}`;
		case ImageLocation.Remote:
			return imageUrl;
		}
	};

	const handleSubmit = () => {
		const manga: MangaEntity = {
			name: name,
			pages: imageUrls.map(imageUrl => ({ url: imageUrl })),
			tagIds: tagIds
		};
		props.onSubmit(manga);
	};

	return (
		<div className="manga-form">
			<div className="p-grid manga-form-row">
				<div className="p-sm-12 p-md-6">
					<NameInput value={name} onInput={value => setName(value)} />
				</div>
				<div className="p-sm-12 p-md-6">
					<TagsInput tagIds={tagIds} onChange={newTagIds => setTagIds(newTagIds)} />
				</div>
			</div>
			<div className="p-grid manga-form-row">
				<div className="p-sm-12 p-md-6 local-image">
					<LocalUrlInput onFileSelected={additionalImageUrls => insertImageUrls(additionalImageUrls, ImageLocation.Local)} />
				</div>
				<div className="p-sm-12 p-md-6 remote-image">
					<RemoteUrlInput onSubmit={additionalImageUrls => insertImageUrls(additionalImageUrls, ImageLocation.Remote)} />
				</div>
			</div>
			<div className="p-grid manga-form-row">
				<div className="p-sm-12">
					<ImageUrlPreviewList imageUrls={imageUrls} onChange={newImageUrls => setImageUrls(newImageUrls)} />
				</div>
			</div>
			<div className="p-grid manga-form-row">
				<div className="p-sm-12">
					<Button label="Submit" icon="pi pi-check" onClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
};

export default connect<ComponentStateProps, ComponentDispatchProps>(null, {})(MangaForm);