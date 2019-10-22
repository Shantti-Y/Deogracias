import React, { FC, useEffect, useState } from 'react';

import DrawerItem from '@component/DrawerItem/MangaEditor';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/NewManga';
export const NewMangaHeaderItem = HeaderItem;

import MangaForm from '@component/MangaForm';

interface MangasIdEditProps { }
const MangasIdEdit: FC<MangasIdEditProps> = props => {

  return (
    <div>
      <MangaForm />
    </div>
  );
};
export default MangasIdEdit;