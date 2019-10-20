import React, { FC } from 'react';

import ItemContainer from '@component/HeaderItem/ItemContainer';

import './style.scss';

interface DashboardProps {}
const Dashboard: FC<DashboardProps> = props => {

  return (
    <ItemContainer title="Book List">
      
    </ItemContainer>
  )
}
export default Dashboard;