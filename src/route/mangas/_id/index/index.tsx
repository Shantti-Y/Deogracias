import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { TableName, appDB } from '@util/database';

import DrawerItem from './Drawer';
export const MangaViewerDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const MangaViewerHeaderItem = HeaderItem;

import ZoomNavigator from '@component/ZoomNavigator';
import PageNavigator from '@component/PageNavigator';

import { fetchMangaById } from '@action/entity/manga';

import { statusType } from '@util/appStatus';

interface ComponentStateProps {
  manga: MangaEntity;
  appStatus: statusType
}
interface ComponentDispatchProps {
  onPageLoad: (mangaId: number) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasId: FC<ComponentProps> = props => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [windowSizePercent, setWindowSizePercent] = useState(100);

  const { id: paramId } = useParams();

  useEffect(() => {
    if (paramId) {
      const initId = parseInt(paramId);
      props.onPageLoad(initId);
    }
  }, [paramId]);

  const imageSize = (): string => {
    return `${windowSizePercent}vh`
  }

  return (
    <div id="mangas-_id">
      <img src={props.manga.pages[currentPageNumber].url} style={{ height: imageSize(), width: 'auto' }} />
      <ZoomNavigator
        currentZoomPercent={windowSizePercent}
        onChange={percent => setWindowSizePercent(percent)}
      />
      <PageNavigator
        currentPageIdx={currentPageNumber}
        maxPageIdx={props.manga.pages.length - 1}
        onChange={idx => setCurrentPageNumber(idx)}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  manga: state.entity.manga.selectedManga,
  appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
  onPageLoad: (mangaId: number) => dispatch(fetchMangaById.action(mangaId))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangasId);