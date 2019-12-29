import React, { FC } from 'react';

import ItemContainer from '@appComponent/HeaderItem/ItemContainer';
import FilterForm from '@appComponent/HeaderItem/FilterForm';

interface DashboardProps { }
const Dashboard: FC<DashboardProps> = props => 
	<ItemContainer title="All Books">
		<FilterForm />
	</ItemContainer>;
  
export default Dashboard;