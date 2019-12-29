import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import NewTagItem from '@appComponent/DrawerItem/NewTagItem';
import TagList from '@appComponent/DrawerItem/TagList';

interface ComponentProps {

}
const Dashboard: FC<ComponentProps> = props => {
	const history = useHistory();

	return (
		<div className="drawer-dashboard drawer-menu-list">
			<MenuItem icon="pi pi-image" text="New Manga" onClick={() => history.push(`/mangas/new`)} />
			<NewTagItem />
			<TagList />
		</div>

	);
};
export default Dashboard;