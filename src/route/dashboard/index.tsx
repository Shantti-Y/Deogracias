import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import DrawerItem from './Drawer';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const DashboardHeaderItem = HeaderItem;

import MangaList from '@component/MangaList';

import { fetchAllTags } from '@action/entity/tag';
import { fetchAllMangas } from '@action/entity/manga';

interface ComponentStateProps {}
interface ComponentDispatchProps {
  onPageLoad: () => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const Dashboard: FC<ComponentProps> = props => {

  useEffect(() => {
    props.onPageLoad();
  }, []);

  return (
    <MangaList />
  );
};

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => {
    dispatch(fetchAllTags.action());
    dispatch(fetchAllMangas.action());
  }
});

export default connect<ComponentStateProps, ComponentDispatchProps>(null, mapDispatchToProps)(Dashboard);