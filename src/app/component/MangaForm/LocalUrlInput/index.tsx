import React, { FC, useState } from 'react';

import './style.scss';

interface LocalUrlInputProps {
  onFileSelected: (imageUrls: string[]) => void
}
const LocalUrlInput: FC<LocalUrlInputProps> = props => {
	const [dragActive, setDragActive] = useState(false);

	const dragActiveClassname = dragActive ? 'drag-active' : 'drag-inactive';

	const handleFileSelected = (event: React.ChangeEvent) => {
		const target = event.target as HTMLInputElement;
		const imageUrls = target.value.split(';');
		props.onFileSelected(imageUrls);
	};
  
	return (
		<div className={`manga-form local-url-input ${dragActiveClassname}`}>
			<h3>LocalImageSetting</h3>
			<div className="uploader-form">
				<input id="local-image-urls"
					type="file"
					accept="image/*"
					multiple
					onChange={event => handleFileSelected(event)}
					onDragEnter={() => setDragActive(true)}
					onDragLeave={() => setDragActive(false)}
					onMouseEnter={() => setDragActive(true)}
					onMouseLeave={() => setDragActive(false)}
				/>
				<label htmlFor="local-image-urls">
					<p>Upload File {dragActive}</p>
					<i className="pi pi-plus-circle" />
				</label>
			</div>
		</div>
	);
};
export default LocalUrlInput;