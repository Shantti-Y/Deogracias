import React, { FC } from 'react';

import './style.scss';

interface ComponentProps{
  image?: MangaPageEntity;
  sizePercent: number;
}
const MangaViewer: FC<ComponentProps> = props => {

  const imageSize = (): string => {
    return `calc(${props.sizePercent}vh - 116px)`
  }

  const displayImage = () => {
    return props.image ? props.image.url : '';
  }

  return (
    <div className="image-viewer">
      <img src={displayImage()} style={{ height: imageSize(), width: 'auto' }} />
    </div>
    
  );
};

export default MangaViewer;