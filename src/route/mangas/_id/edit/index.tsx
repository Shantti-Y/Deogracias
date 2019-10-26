import React, { FC, useEffect, useState, useRef } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { TableName, appDB } from '@util/database';

import DrawerItem from './Drawer';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const EditMangaHeaderItem = HeaderItem;

import MangaForm from '@component/MangaForm';

import { fetchTags } from '@action/entity/tag';
import { updateManga, changeSelectedMangaId } from '@action/entity/manga';

import { statusType } from '@util/appStatus';

interface ComponentStateProps {
  mangas: MangaEntity[];
  appStatus: statusType
}
interface ComponentDispatchProps {
  onPageLoad: (mangaId: number) => void;
  onSubmit: (manga: MangaEntity) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasIdEdit: FC<ComponentProps> = props => {
  const [manga, setManga] = useState({
    id: undefined,
    name: '',
    pages: [{ url: '' }],
    tagIds: []
  } as MangaEntity);

  const { id: paramId } = useParams();

  const prevManga = useRef({
    id: undefined,
    name: '',
    pages: [{ url: '' }],
    tagIds: []
  } as MangaEntity);
  prevManga.current = manga;

  useEffect(() => {
    if (paramId) {
      const initId = parseInt(paramId);
      props.onPageLoad(initId);
      appDB[TableName.Mangas].get({ id: initId }).then(result => {
        if (result) {
          setManga(result);
        }
      });
    }
  }, []);

  const handleSubmit = (newManga: MangaEntity) => {
    props.onSubmit(Object.assign({}, manga, newManga));
  }

  if (JSON.stringify(prevManga.current) !== JSON.stringify(manga)) {
    return <Redirect to="/" />
  } else {
    return (
      <div>
        <MangaForm
          initialManga={manga}
          onSubmit={newManga => handleSubmit(newManga)}
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
  onPageLoad: (mangaId: number) => {
    dispatch(changeSelectedMangaId.action(mangaId));
    dispatch(fetchTags.action());
  },
  onSubmit: (manga: MangaEntity) => dispatch(updateManga.action(manga))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangasIdEdit);