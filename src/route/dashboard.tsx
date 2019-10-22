import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import DrawerItem from '@component/DrawerItem/Dashboard';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/Dashboard';
export const DashboardHeaderItem = HeaderItem;

import MangaList from '@component/MangaList';

import { fetchTags } from '@action/entity/tag';
import { fetchMangas } from '@action/entity/manga';

interface ComponentStateProps {
  mangas: MangaEntity[];
}
interface ComponentDispatchProps {
  onPageLoad: () => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const Dashboard: FC<ComponentProps> = props => {

  useEffect(() => {
    props.onPageLoad();
  }, []);
  
  return (
    <MangaList mangas={props.mangas} />
  );
};

const mapStateToProps = state => ({
  mangas: state.entity.manga.mangas
});

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => {
    dispatch(fetchTags());
    dispatch(fetchMangas());
  }
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(Dashboard);