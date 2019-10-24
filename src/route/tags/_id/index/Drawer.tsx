import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from '@component/DrawerItem/MenuItem';
import NewTagItem from '@component/DrawerItem/NewTagItem';
import TagList from '@component/DrawerItem/TagList';

interface ComponentProps {

}
const Dashboard: FC<ComponentProps> = props => {
  const history = useHistory();

  return (
    <div className="drawer-dashboard drawer-menu-list">
      <MenuItem icon="pi pi-image" text="New Manga" onClick={() => history.push(`/mangas/new`)} />
      <NewTagItem />
      <TagList />
    </div>

  )
}
export default Dashboard;