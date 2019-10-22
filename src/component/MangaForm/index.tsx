import React, { FC, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import { Button } from 'primereact/button';

import NameInput from '@component/MangaForm/NameInput';
import LocalUrlInput from '@component/MangaForm/LocalUrlInput';
import RemoteUrlInput from '@component/MangaForm/RemoteUrlInput';
import ImageUrlPreviewList from '@component/MangaForm/ImageUrlPreviewList';
import TagsInput from '@component/MangaForm/TagsInput';

enum ImageLocation {
  Local = 1,
  Remote = 2
}
interface ComponentStateProps {}
interface ComponentDispatchProps {}
interface ComponentOwnProps {
  onSubmit: (manga: MangaEntity) => void;
}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangaForm: FC<ComponentProps> = props => {
  const [name, setName] = useState('' as string);
  const [imageUrls, setImageUrls] = useState([] as string[]);
  const [tagIds, setTagIds] = useState([] as number[]);

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
  }

  return (
    <div>
      <div className="p-grid">
        <div className="p-sm-12 p-md-6"><NameInput value={name} onInput={value => setName(value)} /></div>
        <div className="p-sm-0 p-md-6" />
      </div>
      <div className="p-grid">
        <div className="p-sm-12 p-md-6">
          <div className="local-image">
            <LocalUrlInput onFileSelected={additionalImageUrls => insertImageUrls(additionalImageUrls, ImageLocation.Local)} />
          </div>
          <div className="remote-image">
            <RemoteUrlInput onSubmit={additionalImageUrls=> insertImageUrls(additionalImageUrls, ImageLocation.Remote)} />
          </div>
        </div>
        <div className="p-sm-12 p-md-6">
          <ImageUrlPreviewList imageUrls={imageUrls} onChange={newImageUrls => setImageUrls(newImageUrls)} />
        </div>
      </div>
      <div className="p-grid">
        <div className="p-sm-12 p-md-6">
          <TagsInput tagIds={tagIds} onChange={newTagIds => setTagIds(newTagIds)} />
        </div>
        <div className="p-sm-0 p-md-6" />
      </div>
      <div className="p-grid">
        <div className="p-sm-12 p-md-6">
          <Button label="Click" icon="pi pi-check" onClick={handleSubmit} />
        </div>
        <div className="p-sm-0 p-md-6" />
      </div>
    </div>
  );
};

export default connect<ComponentStateProps, ComponentDispatchProps>(null, {})(MangaForm);