import React, { FC, useEffect, useState } from 'react';
import { DeograciasTableName, deograciasDB } from '@util/database';

import seedMangas from '../../public/seeds/mangas';
import seedTags from '../../public/seeds/tags';

import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

import DrawerItem from '@component/DrawerItem/Dashboard';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/Dashboard';
export const DashboardHeaderItem = HeaderItem;

import MangaItem from '@component/MangaItem';

interface DashboardProps { }
const Dashboard: FC<DashboardProps> = props => {
  const [mangas, setMangas] = useState([] as MangaEntity[]);

  useEffect(() => {
    setMangas(seedMangas);
    // deograciasDB.selectAllEntities(DeograciasTableName.Mangas).then(result => {
    //   setFiles(result as never[]);
    // });
  }, []);

  return (
    <DataView value={mangas} layout="grid" itemTemplate={MangaItem} />
  );
};
export default Dashboard;