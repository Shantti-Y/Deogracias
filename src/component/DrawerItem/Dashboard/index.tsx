import React, { FC, useState, useEffect } from 'react';

import ItemContainer from '@component/DrawerItem/ItemContainer';

import './style.scss';

interface DashboardProps {

}
const Dashboard: FC<DashboardProps> = props => {
  const [tags, setTags] = useState([] as TagEntity[]);

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
      items: tags.length > 0 ?
          tags.map(tag => {
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
export default Dashboard;