import React, { FC } from 'react';

import ItemContainer from '@component/HeaderItem/ItemContainer';
import FilterForm from '@component/HeaderItem/FilterForm';

interface DashboardProps { }
const Dashboard: FC<DashboardProps> = props => {

  return (
    <ItemContainer title="All Books">
      <FilterForm />
    </ItemContainer>
  )
}
export default Dashboard;