import React, { FC, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import DrawerItem from './Drawer';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const DashboardHeaderItem = HeaderItem;

import MangaList from '@appComponent/MangaList';

import { fetchAllTags, fetchTagById } from '@appAction/entity/tag';
import { fetchMangasByTagId } from '@appAction/entity/manga';

import { statusType, warningStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  tag: TagEntity;
  tags: TagEntity[];
  appStatus: statusType;
}
interface ComponentDispatchProps {
  onPageLoad: (tagId: number) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagsId: FC<ComponentProps> = props => {
	const { id: paramId } = useParams();
	const history = useHistory();

	useEffect(() => {
		if (paramId) {
			const initId = parseInt(paramId);
			props.onPageLoad(initId);
		}
	}, [paramId]);

	useEffect(() => {
		if (props.appStatus === warningStatus.DELETED_TAG) {
			history.push('/');
		}
	}, [props.appStatus]);

	return (
		<MangaList />
	);
};

const mapStateToProps = state => ({
	tag: state.entity.tag.selectedTag,
	tags: state.entity.tag.tags,
	appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
	onPageLoad: (tagId: number) => {
		dispatch(fetchTagById.action(tagId));
		dispatch(fetchAllTags.action());
		dispatch(fetchMangasByTagId.action(tagId));
	}
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TagsId);