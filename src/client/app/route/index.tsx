import React, { FC } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '@appUtil/history';

import MainLayout from '@appLayout/Main/index';
import ViewerLayout from '@appLayout/Viewer/index';

import Dashboard, { DashboardDrawerItem, DashboardHeaderItem } from '@appRoute/dashboard';
import MangasNew, { MangaEditorDrawerItem as MangaEditorDrawerItemOnNew, NewMangaHeaderItem } from '@appRoute/mangas/new';
import MangasId, { MangaViewerDrawerItem, MangaViewerHeaderItem } from '@appRoute/mangas/_id/index';
import MangasIdEdit, { EditMangaHeaderItem, MangaEditorDrawerItem as MangaEditorDrawerItemOnEdit } from '@appRoute/mangas/_id/edit';
import TagsIdEdit, { DashboardDrawerItem as TagsIdDashboardDrawerItem, DashboardHeaderItem as TagsIdDashboardHeaderItem } from '@appRoute/tags/_id/index';

interface LayoutProps {
  slot: JSX.Element;
  drawer: FC<any>;
  header: FC<any>;
}

interface RouterProps {}
const AppRouter: FC<RouterProps> = () => {
	const renderRouteWithMainLayout = (components: LayoutProps) => <MainLayout drawerItem={components.drawer} headerItem={components.header}>{components.slot}</MainLayout>;
	const renderRouteWithViewerLayout = (components: LayoutProps) => <ViewerLayout drawerItem={components.drawer} headerItem={components.header}>{components.slot}</ViewerLayout>;
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" exact component={() => renderRouteWithMainLayout({ slot: <Dashboard />, drawer: DashboardDrawerItem, header: DashboardHeaderItem })} />
				<Route path="/mangas/new" exact component={() => renderRouteWithMainLayout({ slot: <MangasNew />, drawer: MangaEditorDrawerItemOnNew, header: NewMangaHeaderItem })} />
				<Route path="/mangas/:id" exact component={() => renderRouteWithViewerLayout({ slot: <MangasId />, drawer: MangaViewerDrawerItem, header: MangaViewerHeaderItem })} />
				<Route path="/mangas/:id/edit" exact component={() => renderRouteWithMainLayout({ slot: <MangasIdEdit />, drawer: MangaEditorDrawerItemOnEdit, header: EditMangaHeaderItem })} />
				<Route path="/tags/:id" exact component={() => renderRouteWithMainLayout({ slot: <TagsIdEdit />, drawer: TagsIdDashboardDrawerItem, header: TagsIdDashboardHeaderItem })} />
			</Switch>
		</Router>
	);
};

export default AppRouter;