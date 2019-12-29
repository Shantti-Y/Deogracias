import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import TagForm from '@appComponent/DrawerItem/TagForm';

import { createTag } from '@appAction/entity/tag';

import { statusType, successStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  appStatus: statusType
}
interface ComponentDispatchProps {
  onSubmit: (tag: TagEntity) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const NewTagItem: FC<ComponentProps> = props => {
	const [formOpened, setFormOpened] = useState(false);

	useEffect(() => {
		if (props.appStatus === successStatus.CREATED_TAG) {
			setFormOpened(false);
		}
	}, [props.appStatus]);

	if (formOpened) {
		return (
			<TagForm
				opened={formOpened}
				onClose={() => setFormOpened(false)}
				onSubmit={(tag: TagEntity) => props.onSubmit(tag)}
				initialTag={{ name: '' }}
			/>
		);
	} else {
		return <MenuItem icon="pi pi-tag" text="New Tag" onClick={() => setFormOpened(true)} />;
	}
};
const mapStateToProps = state => ({ appStatus: state.util.appStatus.status });
const mapDispatchToProps = dispatch => ({ onSubmit: (tag: TagEntity) => dispatch(createTag.action(tag)) });

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(NewTagItem);