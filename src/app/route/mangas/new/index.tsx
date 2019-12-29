import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import DrawerItem from './Drawer';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const NewMangaHeaderItem = HeaderItem;

import MangaForm from '@appComponent/MangaForm';

import { fetchAllTags } from '@appAction/entity/tag';
import { createManga } from '@appAction/entity/manga';

import { statusType, successStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  appStatus: statusType
}
interface ComponentDispatchProps {
  onPageLoad: () => void;
  onSubmit: (manga: MangaEntity) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasNew: FC<ComponentProps> = props => {
	const history = useHistory();

	useEffect(() => {
		props.onPageLoad();
	}, []);

	useEffect(() => {
		if (props.appStatus === successStatus.CREATED_MANGA) {
			history.push('/');
		}
	}, [props.appStatus]);
  
	return (
		<div>
			<MangaForm onSubmit={manga => props.onSubmit(manga)} />
		</div>
	);
};
const mapStateToProps = state => ({ appStatus: state.util.appStatus.status });

const mapDispatchToProps = dispatch => ({
	onPageLoad: () => dispatch(fetchAllTags.action()),
	onSubmit: (manga: MangaEntity) => dispatch(createManga.action(manga))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangasNew);