import React, { FC, useEffect, useState } from 'react';
import { DeograciasTableName, deograciasDB } from '@util/database';

import seedMangas from '../../public/seeds/mangas';

import DrawerItem from '@component/DrawerItem/Dashboard';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/Dashboard';
export const DashboardHeaderItem = HeaderItem;

import MangaList from '@component/MangaList';

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
    <MangaList mangas={mangas} />
  );
};
export default Dashboard;