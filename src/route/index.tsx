import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MainLayout from '@layout/Main';
import ViewerLayout from '@layout/Viewer';

import Dashboard, { DashboardDrawerItem, DashboardHeaderItem } from '@route/dashboard';
import MangasNew, { MangaEditorDrawerItem as MangaEditorDrawerItemOnNew, NewMangaHeaderItem } from '@route/mangas/new';
import MangasId, { MangaViewerDrawerItem, MangaViewerHeaderItem } from '@route/mangas/_id/index';
import MangasIdEdit, { MangaEditorDrawerItem as MangaEditorDrawerItemOnEdit, EditMangaHeaderItem } from '@route/mangas/_id/edit';
import TagsIdEdit, { DashboardDrawerItem as TagsIdDashboardDrawerItem, DashboardHeaderItem as TagsIdDashboardHeaderItem } from '@route/tags/_id/index';

interface LayoutProps {
  slot: JSX.Element;
  drawer: FC<any>;
  header: FC<any>;
}

interface RouterProps {}
const Router: FC<RouterProps> = () => {
  const renderRouteWithMainLayout = (components: LayoutProps) => {
    return <MainLayout drawerItem={components.drawer} headerItem={components.header}>{components.slot}</MainLayout>;
  }
  const renderRouteWithViewerLayout = (components: LayoutProps) => {
    return <ViewerLayout drawerItem={components.drawer} headerItem={components.header}>{components.slot}</ViewerLayout>;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => renderRouteWithMainLayout({ slot: <Dashboard />, drawer: DashboardDrawerItem, header: DashboardHeaderItem })} />
        <Route path="/mangas/new" exact render={() => renderRouteWithMainLayout({ slot: <MangasNew />, drawer: MangaEditorDrawerItemOnNew, header: NewMangaHeaderItem })} />
        <Route path="/mangas/:id" exact render={() => renderRouteWithViewerLayout({slot: <MangasId />, drawer: MangaViewerDrawerItem, header: MangaViewerHeaderItem})} />
        <Route path="/mangas/:id/edit" exact render={() => renderRouteWithMainLayout({ slot: <MangasIdEdit />, drawer: MangaEditorDrawerItemOnEdit, header: EditMangaHeaderItem })} />
        <Route path="/tags/:id" exact render={() => renderRouteWithMainLayout({ slot: <TagsIdEdit />, drawer: TagsIdDashboardDrawerItem, header: TagsIdDashboardHeaderItem })} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;