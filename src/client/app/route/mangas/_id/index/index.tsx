import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import DrawerItem from './Drawer';
export const MangaViewerDrawerItem = DrawerItem;
import HeaderItem from './Header';
export const MangaViewerHeaderItem = HeaderItem;

import ImageViewer from '@appComponent/ImageViewer';
import ZoomNavigator from '@appComponent/ZoomNavigator';
import PageNavigator from '@appComponent/PageNavigator';

import { fetchMangaById } from '@appAction/entity/manga';
import { fetchTagsByIds } from '@appAction/entity/tag';
import { changeCurrentPageIdx } from '@appAction/util/viewer';

import { statusType } from '@appUtil/appStatus';

interface ComponentStateProps {
  manga: MangaEntity;
  currentPageIdx: number;
  appStatus: statusType
}
interface ComponentDispatchProps {
  onPageLoad: (mangaId: number) => void;
  onSetPageIdx: (pageIdx: number) => void;
  onSetManga: (tagIds: number[]) => void
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasId: FC<ComponentProps> = props => {
	const [windowSizePercent, setWindowSizePercent] = useState(100);

	const { id: paramId } = useParams();

	useEffect(() => {
		if (paramId) {
			const initId = parseInt(paramId);
			props.onPageLoad(initId);
			setWindowSizePercent(100);
		}
	}, [paramId]);

	useEffect(() => {
		if (props.manga) {
			props.onSetManga(props.manga.tagIds);
		}
	}, [props.manga]);

	const currentPageNumber = () => props.currentPageIdx;

	return (
		<div id="mangas-_id">
			<ImageViewer image={props.manga.pages[currentPageNumber()]} sizePercent={windowSizePercent} />
			<ZoomNavigator
				currentZoomPercent={windowSizePercent}
				onChange={percent => setWindowSizePercent(percent)}
			/>
			<PageNavigator
				currentPageIdx={currentPageNumber()}
				maxPageIdx={props.manga.pages.length - 1}
				onChange={idx => props.onSetPageIdx(idx)}
			/>
		</div>
	);
};
const mapStateToProps = state => ({
	manga: state.entity.manga.selectedManga,
	currentPageIdx: state.util.viewer.currentPageIdx,
	appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
	onPageLoad: (mangaId: number) => {
		dispatch(fetchMangaById.action(mangaId));
		dispatch(changeCurrentPageIdx.action(0));
	},
	onSetPageIdx: (pageIdx: number) => dispatch(changeCurrentPageIdx.action(pageIdx)),
	onSetManga: (tagIds: number[]) => dispatch(fetchTagsByIds.action(tagIds))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangasId);