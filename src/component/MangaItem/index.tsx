import React from 'react';

import './style.scss';

interface MangaItemProps {
  manga: MangaEntity;
}
const MangaItem = manga => {
  const imageSrc = manga.pages[0].url;
  return (
    <div className="manga-item">
      <div className="name">{manga.name}</div>
      <img className="image" src={imageSrc} alt={imageSrc} />
    </div>
  )
}
export default MangaItem;