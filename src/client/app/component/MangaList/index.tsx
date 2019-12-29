import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';

import ConfirmationModal from '@appComponent/ConfirmationModal';

import { deleteManga } from '@appAction/entity/manga';

import './style.scss';
interface ComponentStateProps {
  mangas: MangaEntity[]
}
interface ComponentDispatchProps {
  onDelete: (mangaId: number) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangaList: FC<ComponentProps> = props => {
	// consider the state modalOpened to move redux state
	const [modalOpened, setModalOpened] = useState(false);
	const [targetMangaId, setTargetMangaId] = useState();

	const history = useHistory();

	const targetMangaName = (): string => {
		const manga = props.mangas.find(manga => manga.id === targetMangaId);
		return manga ? manga.name : '';
	};

	const handleConfirmationModalOpened = (id: number) => {
		setTargetMangaId(id);
		setModalOpened(true);
	};

	const handleConfirmationModalDeletedManga = () => {
		props.onDelete(targetMangaId);
		setModalOpened(false);
	};

	const MangaItem = (manga: MangaEntity) => {
		const imageSrc = manga.pages[0].url;

		return (
			<div className="manga-item">
				<div className="manga-item-thumbnail">
					<div className="manga-item-commands">
						<Button
							icon="pi pi-pencil"
							className="manga-item-command"
							tooltip={`Edit ${manga.name}`}
							onClick={() => history.push(`/mangas/${manga.id}/edit`)}
						/>
						<Button
							icon="pi pi-trash"
							className="manga-item-command"
							tooltip={`Delete ${manga.name}`}
							onClick={() => handleConfirmationModalOpened(manga.id!!)}
						/>
					</div>

					<Link to={`/mangas/${manga.id}`} >
						<img src={imageSrc} alt={imageSrc} />
					</Link>

					<div className="manga-item-name">
						<span>{manga.name}</span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="manga-list">
			<DataView value={props.mangas} layout="grid" itemTemplate={MangaItem} />
			<ConfirmationModal
				opened={modalOpened}
				name={targetMangaName()}
				onDelete={() => handleConfirmationModalDeletedManga()}
				onClose={() => setModalOpened(false)}
			/>
		</div>
	);
};
const mapStateToProps = state => ({ mangas: state.entity.manga.mangas });
const mapDispatchToProps = dispatch =>  ({ onDelete: (mangaId: number) => dispatch(deleteManga.action(mangaId)) });
export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(MangaList);