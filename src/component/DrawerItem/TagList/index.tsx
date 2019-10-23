import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@component/DrawerItem/MenuItem';
import TagForm from '@component/DrawerItem/TagForm';
import ConfirmationModal from '@component/ConfirmationModal';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import { updateTag, deleteTag } from '@action/entity/tag';

import appStatus from '@util/appStatus';

interface ComponentStateProps {
  tags: TagEntity[],
  appStatus: appStatus
}
interface ComponentDispatchProps {
  onSubmit: (tag: TagEntity) => void;
  onDelete: (tagId: number) => void;
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagList: FC<ComponentProps> = props => {
  const [targetTagId, setTargetTagId] = useState();
  const [modalOpened, setModalOpened] = useState(false);

  const targetTagName = (): string => {
    const tag = props.tags.find(tag => tag.id === targetTagId);
    return tag ? tag.name : '';
  }

  const handleConfirmationModalOpened = (id: number) => {
    setTargetTagId(id);
    setModalOpened(true);
  }

  const handleConfirmationModalDeletedTag = () => {
    props.onDelete(targetTagId);
    setModalOpened(false);
  }

  return (
    <div className="tag-list">
      <MenuItem
        icon="pi pi-tags"
        text="Tag List"
        unclickable
      />
      <ScrollPanel>
        {props.tags.map((tag, idx) => {
          if (targetTagId === tag.id && !modalOpened){
            return (
            <TagForm
              key={idx}
              opened={true}
              onClose={() => setTargetTagId(null)}
              onSubmit={tag => props.onSubmit(tag)}
              initialName={tag.name}
            />);
          } else {
          return (
            <div className="tag-link" key={idx}>
              <Link to={`/tags/${tag.id}`}><i className="pi pi-circle-on" />{tag.name}</Link>
              <Button icon="pi pi-pencil" className="button p-button-info" onClick={() => setTargetTagId(tag.id)} />
              <Button icon="pi pi-times" className="button p-button-danger" onClick={() => handleConfirmationModalOpened(tag.id!!)} />
            </div>
          );
        }
      })}
      </ScrollPanel>
      <ConfirmationModal
        opened={modalOpened}
        name={targetTagName()}
        onDelete={() => handleConfirmationModalDeletedTag()}
        onClose={() => setModalOpened(false)}
      />
    </div>
  )
}
const mapStateToProps = state => ({
  tags: state.entity.tag.tags,
  appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (tag: TagEntity) => dispatch(updateTag({ tag })),
  onDelete: (tagId: number) => dispatch(deleteTag({ tagId }))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TagList);