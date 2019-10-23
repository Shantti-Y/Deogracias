import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from '@component/DrawerItem/MenuItem';
import NewTagItem from '@component/DrawerItem/NewTagItem';
import TagList from '@component/DrawerItem/TagList';

import './style.scss';

interface ComponentProps {}
const MangaEditor: FC<ComponentProps> = props => {
  const history = useHistory();

  return (
    <div className="drawer-manga-editor drawer-menu-list">
      <MenuItem icon="pi pi-home" text="Go to Home" onClick={() => history.push(`/`)} />
      <NewTagItem />
      <TagList />
    </div>
  )
}

export default MangaEditor;