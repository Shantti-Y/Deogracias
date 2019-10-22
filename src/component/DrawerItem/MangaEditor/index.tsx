import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ItemContainer from '@component/DrawerItem/ItemContainer';

import './style.scss';

interface MangaEditorProps {
  tags: TagEntity[]
}
const MangaEditor: FC<MangaEditorProps> = props => {

  const menuItems = () => {
    const newMangaMenu = {
      label: 'New Manga',
      icon: 'pi pi-fw pi-upload',
    };
    const newTagMenu = {
      label: 'New Tag',
      icon: 'pi pi-fw pi-bookmark'
    };
    const tagList = {
      label: 'Tags',
      icon: 'pi pi-fw pi-tags',
      items: props.tags.length > 0 ?
        props.tags.map(tag => {
          return { label: tag.name }
        }) :
        [{ label: 'No Tag' }]
    }
    return [newMangaMenu, newTagMenu, tagList]
  }

  return (
    <ItemContainer
      menuItems={menuItems()}
    />
  )
}
const mapStateToProps = state => ({
  tags: state.entity.tag.tags
});

export default connect(mapStateToProps, null)(MangaEditor);