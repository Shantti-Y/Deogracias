import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@appComponent/DrawerItem/MenuItem';

import { fetchMangasByTagId } from '@appAction/entity/manga';

interface ComponentStateProps {
  tags: TagEntity[],
  mangas: MangaEntity[]
}
interface ComponentDispatchProps {
  onChange: (tagId: number) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TaggedMangaList: FC<ComponentProps> = props => {
	const [targetTagId, setTargetTagId] = useState(0);

	const { id: paramId } = useParams();

	useEffect(() => {
		setTargetTagId(0);
	}, [paramId]);

	const handleChooseTag = (tagId: number) => {
		if (tagId !== targetTagId) {
			setTargetTagId(tagId);
			props.onChange(tagId);
		} else {
			setTargetTagId(0);
		}
	};

	const MangaLink = (manga: MangaEntity) => {
		const isCurrentPage = (): boolean => {
			if (paramId) {
				const targetId = parseInt(paramId);
				return targetId === manga.id;
			}
			return false;
		};

		if (!isCurrentPage()) {
			return (
				<Link
					to={`/mangas/${manga.id!!}`}
					key={manga.id}
					className="manga-link"
				>
					<img src={manga.pages[0].url} alt={manga.name} />
					<div className="manga-info">
						<span>{manga.name}</span>
					</div>
				</Link>
			);
		} else {
			return null;
		}
	};

	return (
		<div className="tagged-manga-list">
			{props.tags.map(tag => 
				<div key={tag.id!!}>
					<MenuItem
						icon="pi pi-tag"
						text={`Tag: ${tag.name}`}
						onClick={() => handleChooseTag(tag.id!!)}
					/>
					{tag.id === targetTagId ? 
						<div className="manga-link-box">
							{props.mangas.map(manga => MangaLink(manga))}
						</div>
						: null}
				</div>)}
		</div>
	);
};
const mapStateToProps = state => ({
	tags: state.entity.tag.tags,
	mangas: state.entity.manga.mangas
});

const mapDispatchToProps = dispatch => ({ onChange: (tagId: number) => dispatch(fetchMangasByTagId.action(tagId)) });

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TaggedMangaList);