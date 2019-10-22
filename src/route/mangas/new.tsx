import React, { FC, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import DrawerItem from '@component/DrawerItem/MangaEditor';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/NewManga';
export const NewMangaHeaderItem = HeaderItem;

import MangaForm from '@component/MangaForm';

import { fetchTags } from '@action/entity/tag';
import { createManga } from '@action/entity/manga';

import appStatus from '@util/appStatus';

interface ComponentStateProps {
  mangas: MangaEntity[];
  appStatus: appStatus
}
interface ComponentDispatchProps {
  onPageLoad: () => void;
  onSubmit: (manga: MangaEntity) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasNew: FC<ComponentProps> = props => {

  const prevMangas = useRef([] as MangaEntity[]);
  prevMangas.current = props.mangas;
  useEffect(() => {
    props.onPageLoad();
  }, []);
  
  if (prevMangas.current.length < props.mangas.length) {
    return <Redirect to="/" />
  }else{
    return (
      <div>
        <MangaForm
          onSubmit={manga => props.onSubmit(manga)}
        />
      </div>
    );
  }
};
const mapStateToProps = state => ({
  mangas: state.entity.manga.mangas,
  appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => dispatch(fetchTags()),
  onSubmit: (manga: MangaEntity) => dispatch(createManga({ manga }))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangasNew);