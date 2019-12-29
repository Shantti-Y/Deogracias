import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import { InputText } from 'primereact/inputtext';

import './style.scss';

import { changeWord } from '@appAction/util/filter';

interface ComponentStateProps {
  word: string;
}
interface ComponentDispatchProps {
  onChange: (word: string) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const FilterForm: FC<ComponentProps> = props => {

	const handleChange = (event: React.FormEvent) => {
		const target = event.target as HTMLInputElement;
		props.onChange(target.value);
	};

	return (
		<div className="p-inputgroup">
			<span className="p-inputgroup-addon">
				<i className="pi pi-search"></i>
			</span>
			<InputText value={props.word} onChange={event => handleChange(event)} placeholder="Search Titles" />
		</div>
	);
};

const mapStateToProps = state => ({ word: state.util.filter.word });

const mapDispatchToProps = dispatch => ({ onChange: (word: string) => dispatch(changeWord.action(word)) });

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(FilterForm);