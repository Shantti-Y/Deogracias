import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@component/DrawerItem/MenuItem';
import TagForm from '@component/DrawerItem/TagForm';

import { createTag } from '@action/entity/tag';

import appStatus from '@util/appStatus';

interface ComponentStateProps {
  appStatus: appStatus
}
interface ComponentDispatchProps {
  onSubmit: (tag: TagEntity) => void;
}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const NewTagItem: FC<ComponentProps> = props => {
  const [formOpened, setFormOpened] = useState(false);
  const [name, setName] = useState('');

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setName(target.value);
  }

  const handleSubmit = () => {
    const tag = { name: name }
    props.onSubmit(tag);
  }

  if (formOpened) {
    return (
      <TagForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onSubmit={(tag: TagEntity) => props.onSubmit(tag)}
      />
    )
  } else {
    return <MenuItem icon="pi pi-tag" text="New Tag" onClick={() => setFormOpened(true)} />;
  }
}
const mapStateToProps = state => ({
  appStatus: state.util.appStatus.status
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (tag: TagEntity) => dispatch(createTag({ tag }))
})

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(NewTagItem);