import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import appStatus from '@util/appStatus';

interface ComponentStateProps {
  appStatus: appStatus
}
interface ComponentDispatchProps {}
interface ComponentOwnProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (tag: TagEntity) => void;
  initialName?: string
}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagForm: FC<ComponentProps> = props => {
  const [name, setName] = useState('');

  useEffect(() => {
    if(props.initialName){
      setName(props.initialName)
    }
  }, []);

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setName(target.value);
  }

  const handleSubmit = () => {
    const tag = { name: name }
    props.onSubmit(tag);
  }

  return (
    <div className="tag-form">
      <InputText value={name} onChange={event => handleChange(event)} />
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
  )
}
const mapStateToProps = state => ({
  appStatus: state.util.appStatus.status
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, {})(TagForm);