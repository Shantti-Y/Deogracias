import React, { FC } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import { changeCurrentPageIdx } from '@appAction/util/viewer';

interface ComponentStateProps {
  pages: MangaPageEntity[];
}
interface ComponentDispatchProps {
  onChange: (pageIdx: number) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const PagePreviewList: FC<ComponentProps> = props => {

	const PageLink = (idx: number, page: MangaPageEntity) => 
		<div
			key={page.id}
			className="page-link"
			onClick={() => props.onChange(idx)}
		>
			<img src={page.url} alt={page.url} />
			<div className="manga-info">
				<span>{page.id!!}</span>
			</div>
		</div>;

	return (
		<div className="page-preview-list">
			{props.pages.map((page, idx) => PageLink(idx, page))}
		</div>
	);
};

const mapStateToProps = state => ({ pages: state.entity.manga.selectedManga.pages });

const mapDispatchToProps = dispatch => ({ onChange: (pageIdx: number) => dispatch(changeCurrentPageIdx.action(pageIdx)) });

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(PagePreviewList);