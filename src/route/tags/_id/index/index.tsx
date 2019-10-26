import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { TableName, appDB } from '@util/database';

import DrawerItem from './Drawer';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const DashboardHeaderItem = HeaderItem;

import MangaList from '@component/MangaList';

import { fetchTags, changeSelectedTagId } from '@action/entity/tag';

interface ComponentStateProps { }
interface ComponentDispatchProps {
  onPageLoad: (tagId: number) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagsId: FC<ComponentProps> = props => {
  const [tag, setTag] = useState({
    id: undefined,
    name: ''
  } as TagEntity);
  const [mangas, setMangas] = useState([] as MangaEntity[]);

  const { id: paramId } = useParams();

  useEffect(() => {
    if (paramId) {
      const initId = parseInt(paramId);
      props.onPageLoad(initId);
      appDB[TableName.Tags].get({ id: initId }).then(result => {
        if (result) {
          setTag(result);
        }
      });
      appDB[TableName.Mangas].where({ tagIds: initId }).toArray((result => {
        if (result) {
          setMangas(result);
        }
      }));
    }
  }, [paramId]);

  return (
    <MangaList mangas={mangas} />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onPageLoad: (tagId: number) => {
    dispatch(changeSelectedTagId.action(tagId))
    dispatch(fetchTags.action());
  }
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TagsId);