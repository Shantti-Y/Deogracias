import React, { FC, useEffect, useState } from 'react';
import { DeograciasTableName, deograciasDB } from '@util/database';

import seedMangas from '../../../../public/seeds/mangas';

import DrawerItem from '@component/DrawerItem/MangaViewer';
export const MangaViewerDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/MangaViewer';
export const MangaViewerHeaderItem = HeaderItem;

import ZoomNavigator from '@component/ZoomNavigator';
import PageNavigator from '@component/PageNavigator';

interface MangasIdProps { }
const MangasId: FC<MangasIdProps> = props => {
  const [file, setFile] = useState({
    id: undefined,
    name: '',
    pages: [{ url: '' }],
    tagIds: []
  } as MangaEntity);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [windowSizePercent, setWindowSizePercent] = useState(100);

  useEffect(() => {
    setFile(seedMangas[12]);
  }, []);

  const imageSize = (): string => {
    return `${windowSizePercent}vh`
  }

  return (
    <div id="mangas-_id">

      <img src={file.pages[currentPageNumber].url} style={{ height: imageSize(), width: 'auto' }} />
      <ZoomNavigator
        currentZoomPercent={windowSizePercent}
        onChange={percent => setWindowSizePercent(percent)}
      />
      <PageNavigator
        currentPageIdx={currentPageNumber}
        maxPageIdx={file.pages.length - 1}
        onChange={idx => setCurrentPageNumber(idx)}
      />

    </div>
  );
};
export default MangasId;