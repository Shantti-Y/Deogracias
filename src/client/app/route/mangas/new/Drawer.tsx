import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import NewTagItem from '@appComponent/DrawerItem/NewTagItem';
import TagList from '@appComponent/DrawerItem/TagList';

interface ComponentProps { }
const MangaEditor: FC<ComponentProps> = props => {
	const history = useHistory();

	return (
		<div className="drawer-manga-editor drawer-menu-list">
			<MenuItem icon="pi pi-home" text="Go to Home" onClick={() => history.push(`/`)} />
			<NewTagItem />
			<TagList />
		</div>
	);
};

export default MangaEditor;