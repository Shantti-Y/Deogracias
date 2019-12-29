import React, { FC } from 'react';
import { connect } from 'react-redux';

import { MultiSelect } from 'primereact/multiselect';

import FormLabel from '@appComponent/MangaForm/FormLabel';

import './style.scss';

interface ComponentOwnProps {
  tagIds: number[],
  onChange: (newTagIds: number[]) => void
}
interface ComponentStateProps {
  tags: TagEntity[]
}
type ComponentProps = ComponentOwnProps & ComponentStateProps;
const TagsInput: FC<ComponentProps> = props => {

	const selectableItems = () => props.tags.map(tag => ({
		label: tag.name,
		value: tag.id
	}));

	return (
		<div className="tags-input">
			<FormLabel name="Tags" />
			<MultiSelect
				value={props.tagIds}
				options={selectableItems()}
				onChange={event => props.onChange(event.value)}
			/>
		</div>
	);
};

const mapStateToProps = state => ({ tags: state.entity.tag.tags });

export default connect<ComponentStateProps>(mapStateToProps, {})(TagsInput);