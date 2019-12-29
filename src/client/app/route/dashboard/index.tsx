import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import DrawerItem from './Drawer';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const DashboardHeaderItem = HeaderItem;

import MangaList from '@appComponent/MangaList';

import { fetchAllTags } from '@appAction/entity/tag';
import { fetchAllMangas, fetchMangasByWord } from '@appAction/entity/manga';

interface ComponentStateProps {
  filterWord: string;
}
interface ComponentDispatchProps {
  onPageLoad: () => void;
  onChangeFilter: (word: string) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const Dashboard: FC<ComponentProps> = props => {

	useEffect(() => {
		props.onPageLoad();
	}, []);

	useEffect(() => {
		props.onChangeFilter(props.filterWord);
	}, [props.filterWord]);

	return (
		<MangaList />
	);
};

const mapStateToProps = state => ({ filterWord: state.util.filter.word });

const mapDispatchToProps = dispatch => ({
	onPageLoad: () => {
		dispatch(fetchAllTags.action());
		dispatch(fetchAllMangas.action());
	},
	onChangeFilter: (word: string) => dispatch(fetchMangasByWord.action(word))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(Dashboard);