import React, { FC } from 'react';
import './style.scss';

import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';

interface ImageUrlPreviewListProps {
  imageUrls: string[],
  onChange: (imageUrls: string[]) => void
}
const ImageUrlPreviewList: FC<ImageUrlPreviewListProps> = props => {

	const handleItemRemove = (imageUrl: string) => {
		const newImageUrls = Object.assign([], props.imageUrls);
		const targetIdx = newImageUrls.findIndex(itemImageUrl => itemImageUrl === imageUrl);
		newImageUrls.splice(targetIdx, 1);
		props.onChange(newImageUrls);
	};

	const MangaPreviewListItem = (imageUrl: string) => 
		<div className="manga-preview-list-item">
			<img
				src={imageUrl}
				alt={imageUrl}
			/>
			<Button icon="pi pi-times" className="p-button-danger" onClick={() => handleItemRemove(imageUrl)}/>
		</div>;
	return (
		<OrderList
			value={props.imageUrls}
			itemTemplate={MangaPreviewListItem}
			dragdrop
			responsive
			onChange={event => props.onChange(event.value)}
		/>
	);
};
export default ImageUrlPreviewList;