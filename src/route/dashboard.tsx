import React, { FC, useEffect, useState } from 'react';
import { DeograciasTableName, deograciasDB } from '@util/database';

import DrawerItem from '@component/DrawerItem/Dashboard';
export const DashboardDrawerItem = DrawerItem;
import HeaderItem from '@component/HeaderItem/Dashboard';
export const DashboardHeaderItem = HeaderItem;

interface DashboardProps { }
const Dashboard: FC<DashboardProps> = props => {
  const [files, setFiles] = useState([] as MangaEntity[]);

  useEffect(() => {
    deograciasDB.selectAllEntities(DeograciasTableName.Mangas).then(result => {
      setFiles(result as never[]);
    });
  }, []);

  return (
    <div id="file-viewer">
      {files.map(file => <h2>{file.name}</h2>)}
    </div>
  );
};
export default Dashboard;