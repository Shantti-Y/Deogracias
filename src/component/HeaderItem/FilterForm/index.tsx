import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import { InputText } from 'primereact/inputtext';

import './style.scss';

import { fetchMangasByWord } from '@action/entity/manga';

interface ComponentStateProps {}
interface ComponentDispatchProps {
  onChange: (word: string) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const FilterForm: FC<ComponentProps> = props => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
    props.onChange(target.value);
  }

  return (
    <InputText value={value} onChange={event => handleChange(event)} />
  )
}
const mapDispatchToProps = dispatch => ({
  onChange: (word: string) => dispatch(fetchMangasByWord.action(word))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(null, mapDispatchToProps)(FilterForm);