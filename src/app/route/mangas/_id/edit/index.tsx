import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { TableName, appDB } from '@appUtil/database';

import DrawerItem from './Drawer';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const EditMangaHeaderItem = HeaderItem;

import MangaForm from '@appComponent/MangaForm';

import { fetchAllTags } from '@appAction/entity/tag';
import { fetchMangaById, updateManga } from '@appAction/entity/manga';

import { statusType, successStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  manga: MangaEntity;
  appStatus: statusType
}
interface ComponentDispatchProps {
  onPageLoad: (mangaId: number) => void;
  onSubmit: (manga: MangaEntity) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasIdEdit: FC<ComponentProps> = props => {

	const { id: paramId } = useParams();
	const history = useHistory();

	useEffect(() => {
		if (paramId) {
			const initId = parseInt(paramId);
			props.onPageLoad(initId);
		}
	}, []);

	useEffect(() => {
		if (props.appStatus === successStatus.UPDATED_MANGA) {
			history.push('/');
		}
	}, [props.appStatus]);

	const handleSubmit = (newManga: MangaEntity) => {
		props.onSubmit({ ...props.manga, ...newManga });
	};

	return (
		<div>
			<MangaForm
				initialManga={props.manga}
				onSubmit={newManga => handleSubmit(newManga)}
			/>
		</div>
	);
};
const mapStateToProps = state => ({
	manga: state.entity.manga.selectedManga,
	appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
	onPageLoad: (mangaId: number) => {
		dispatch(fetchMangaById.action(mangaId));
		dispatch(fetchAllTags.action());
	},
	onSubmit: (manga: MangaEntity) => dispatch(updateManga.action(manga))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangasIdEdit);