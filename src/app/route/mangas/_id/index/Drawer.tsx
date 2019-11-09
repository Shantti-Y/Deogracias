import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import TaggedMangaList from '@appComponent/DrawerItem/TaggedMangaList';

interface MangaEditorProps {}
const MangaEditor: FC<MangaEditorProps> = props => {
  const history = useHistory();

  return (
    <div className="drawer-manga-editor drawer-menu-list">
      <MenuItem icon="pi pi-home" text="Go to Home" onClick={() => history.push(`/`)} />
      <TaggedMangaList />
    </div>
  )
}
export default MangaEditor;