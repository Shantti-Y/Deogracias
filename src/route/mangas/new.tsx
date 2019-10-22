import React, { FC, useEffect, useState } from 'react';

import DrawerItem from '@component/DrawerItem/MangaEditor';
export const MangaEditorDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/NewManga';
export const NewMangaHeaderItem = HeaderItem;

import MangaForm from '@component/MangaForm';

interface MangasNewProps { }
const MangasNew: FC<MangasNewProps> = props => {

  return (
    <div>
      <MangaForm />
    </div>
  );
};
export default MangasNew;