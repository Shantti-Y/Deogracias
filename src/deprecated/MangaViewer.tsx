import React, { FC, useState, useEffect } from 'react';
import { deograciasDB, DeograciasTableName, DeograciasTableEntity } from '@util/database';

interface MangaViewerProps { }
const MangaViewer: FC<MangaViewerProps> = props => {
  const [file, setFile] = useState({
    id: undefined,
    name: '',
    pages: [{ url: '' }],
    tagIds: []
  } as MangaEntity);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const [windowSizePercent, setWindowSizePercent] = useState(100);

  useEffect(() => {
    deograciasDB.selectAllEntities(DeograciasTableName.Mangas).then((result) => {
      const choosenManga = result[0];
      setFile(choosenManga);
    });

    window.addEventListener('keydown', handleKeyPressEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyPressEvent);
    }
  }, [currentPageNumber, windowSizePercent]);

  const lastMangaPageNumberOnDisplay = (): number => {
    return file.pages.length;
  }

  const currentMangaPageNumberOnDisplay = (): number => {
    return currentPageNumber + 1;
  }

  const changeMangaPageNumber = (idx: number) => {
    setCurrentPageNumber(idx);
  }

  const currentPageSource = (): string => {
    return file.pages[currentPageNumber].url
  }

  const handleKeyPressEvent = (event: KeyboardEvent) => {
    event.preventDefault();
    switch(event.code){
      case 'ArrowLeft':
        changeMangaPageNumber(currentPageNumber - 1);
        return true;
      case 'ArrowUp':
        manipulateZoom(windowSizePercent + 10);
        return true;
      case 'ArrowRight':
        changeMangaPageNumber(currentPageNumber + 1);
        return true;
      case 'ArrowDown':
        manipulateZoom(windowSizePercent - 10);
        
        return true;
    }
  }

  const manipulateZoom = (percent: number) => {
    if(percent < 100) {
      return true;
    }
    setWindowSizePercent(percent);
  }

  const imageSize = (): string => {
    return `${windowSizePercent}vh`
  }


  return (
    <div id="manga-viewer">
    
      <img src={file.pages[currentPageNumber].url} style={{ height: imageSize(), width: 'auto'}}/>
      <div className="info" style={{position: 'fixed', bottom: 0}}>
        <p>{`${currentMangaPageNumberOnDisplay()} / ${lastMangaPageNumberOnDisplay()}`}</p>
        <button onClick={() => manipulateZoom(windowSizePercent + 10)}>ZoomIn</button>
        <button onClick={() => manipulateZoom(windowSizePercent - 10)}>ZoomOut</button>

        <button onClick={() => changeMangaPageNumber(currentPageNumber + 1)}>Next</button>
        <button onClick={() => changeMangaPageNumber(currentPageNumber - 1)}>Prev</button>
      </div>

    </div>
  );
};
export default MangaViewer;

// トラックパッド操作
// キーボード操作 左右: ページ遷移, 上下: ズーム
// 