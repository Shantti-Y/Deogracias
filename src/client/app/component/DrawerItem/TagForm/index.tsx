import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { statusType } from '@appUtil/appStatus';

interface ComponentStateProps {
  appStatus: statusType
}
interface ComponentDispatchProps {}
interface ComponentOwnProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (tag: TagEntity) => void;
  initialTag: TagEntity
}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagForm: FC<ComponentProps> = props => {
	const [tag, setTag] = useState({ name: '' } as TagEntity);

	useEffect(() => {
		if (props.initialTag) {
			setTag({ ...props.initialTag });
		}
	}, []);

	const handleChange = (event: React.FormEvent) => {
		const target = event.target as HTMLInputElement;
		const newTag = { ...tag };
		newTag.name = target.value;
		setTag(newTag);
	};

	const handleSubmit = () => {
		props.onSubmit(tag);
	};

	return (
		<div className="tag-form">
			<InputText value={tag.name} onChange={event => handleChange(event)} />
			<Button
				icon="pi pi-check"
				className="button p-button-success"
				onClick={() => handleSubmit()}
			/>
			<Button
				icon="pi pi-times"
				className="button p-button-info"
				onClick={() => props.onClose()}
			/>
		</div>
	);
};
const mapStateToProps = state => ({ appStatus: state.util.appStatus.status });

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, {})(TagForm);