import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';

const MangaItem = (manga: MangaEntity) => {
  const imageSrc = manga.pages[0].url;
  return (
    <Link to={`/mangas/${manga.id}`}>
      <div className="manga-item">
        <div className="name">{manga.name}</div>
        <img className="image" src={imageSrc} alt={imageSrc} />
      </div>
    </Link>
  )
}
export default MangaItem;