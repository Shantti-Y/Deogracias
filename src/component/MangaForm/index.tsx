import React, { FC, useEffect, useState } from 'react';

import { Button } from 'primereact/button';

import DrawerItem from '@component/DrawerItem/MangaEditor';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/NewManga';
export const NewMangaHeaderItem = HeaderItem;

import NameInput from '@component/MangaForm/NameInput';
import LocalUrlInput from '@component/MangaForm/LocalUrlInput';
import RemoteUrlInput from '@component/MangaForm/RemoteUrlInput';
import ImageUrlPreviewList from '@component/MangaForm/ImageUrlPreviewList';
import TagsInput from '@component/MangaForm/TagsInput';

enum ImageLocation {
  Local = 1,
  Remote = 2
}

interface MangaFormProps { }
const MangaForm: FC<MangaFormProps> = props => {
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

  return (
    <div>
      <div className="p-grid">
        <div className="p-sm-12 p-md-6">
          <NameInput value={name} onInput={value => setName(value)} />
        </div>
        <div className="p-sm-0 p-md-6" />
      </div>
      <div className="p-grid">
        <div className="p-sm-12 p-md-6">
          <div className="local-image">
            <LocalUrlInput
              onFileSelected={additionalImageUrls => insertImageUrls(additionalImageUrls, ImageLocation.Local)}
            />
          </div>
          <div className="remote-image">
            <RemoteUrlInput
              onSubmit={additionalImageUrls=> insertImageUrls(additionalImageUrls, ImageLocation.Remote)}
            />
          </div>
        </div>
        <div className="p-sm-12 p-md-6">
          <ImageUrlPreviewList 
            imageUrls={imageUrls}
            onChange={newImageUrls => setImageUrls(newImageUrls)}
          />
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
          <Button label="Click" icon="pi pi-check" />
        </div>
        <div className="p-sm-0 p-md-6" />
      </div>
    </div>
  );
};
export default MangaForm;