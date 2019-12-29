import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import TaggedMangaList from '@appComponent/DrawerItem/TaggedMangaList';
import PagePreviewList from '@appComponent/DrawerItem/PagePreviewList';

interface MangaEditorProps {}
const MangaEditor: FC<MangaEditorProps> = props => {
	const history = useHistory();

	return (
		<div className="drawer-manga-editor drawer-menu-list">
			<MenuItem icon="pi pi-home" text="Go to Home" onClick={() => history.push(`/`)} />
			<TaggedMangaList />
			<PagePreviewList />
		</div>
	);
};
export default MangaEditor;