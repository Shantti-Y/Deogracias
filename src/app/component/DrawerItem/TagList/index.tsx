import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import TagForm from '@appComponent/DrawerItem/TagForm';
import ConfirmationModal from '@appComponent/ConfirmationModal';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import { deleteTag, updateTag } from '@appAction/entity/tag';

import { statusType, successStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  tags: TagEntity[],
  appStatus: statusType
}
interface ComponentDispatchProps {
  onSubmit: (tag: TagEntity) => void;
  onDelete: (tagId: number) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagList: FC<ComponentProps> = props => {
	const [targetTagId, setTargetTagId] = useState();
	const [modalOpened, setModalOpened] = useState(false);

	useEffect(() => {
		if (props.appStatus === successStatus.UPDATED_TAG) {
			setTargetTagId(null);
		}
	}, [props.appStatus]);

	const targetTagName = (): string => {
		const tag = props.tags.find(tag => tag.id === targetTagId);
		return tag ? tag.name : '';
	};

	const handleConfirmationModalClose = () => {
		setTargetTagId(null);
		setModalOpened(false);
	};

	const handleConfirmationModalOpen = (id: number) => {
		setTargetTagId(id);
		setModalOpened(true);
	};

	const handleConfirmationModalDeleteTag = () => {
		props.onDelete(targetTagId);
		setModalOpened(false);
	};

	const TagItem = (tag: TagEntity, idx: number) => 
		<div className="tag-link" key={idx}>
			<Link to={`/tags/${tag.id}`}><i className="pi pi-circle-on" />{tag.name}</Link>
			<div className="buttons">
				<Button icon="pi pi-pencil" className="button p-button-info" onClick={() => setTargetTagId(tag.id)} />
				<Button icon="pi pi-times" className="button p-button-danger" onClick={() => handleConfirmationModalOpen(tag.id!!)} />
			</div>
		</div>;

	return (
		<div className="tag-list">
			<MenuItem
				icon="pi pi-tags"
				text="Tag List"
				unclickable
			/>
			<ScrollPanel className="scroll-panel">
				{props.tags.map((tag, idx) => {
					if (targetTagId === tag.id && !modalOpened) {
						return (
							<TagForm
								key={idx}
								opened={true}
								onClose={() => setTargetTagId(null)}
								onSubmit={tag => props.onSubmit(tag)}
								initialTag={tag}
							/>);
					} else {
						return TagItem(tag, idx);
					}
				})}
			</ScrollPanel>
			<ConfirmationModal
				opened={modalOpened}
				name={targetTagName()}
				onDelete={() => handleConfirmationModalDeleteTag()}
				onClose={() => handleConfirmationModalClose()}
			/>
		</div>
	);
};
const mapStateToProps = state => ({
	tags: state.entity.tag.tags,
	appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
	onSubmit: (tag: TagEntity) => dispatch(updateTag.action(tag)),
	onDelete: (tagId: number) => dispatch(deleteTag.action(tagId))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TagList);