import React, { FC, useEffect, useState } from 'react';

import { DataView } from 'primereact/dataview';
import MangaItem from '@component/MangaItem';

interface MangaListProps {
  mangas: MangaEntity[]
}
const MangaList: FC<MangaListProps> = props => {
  return (
    <DataView value={props.mangas} layout="grid" itemTemplate={MangaItem} />
  );
};
export default MangaList;