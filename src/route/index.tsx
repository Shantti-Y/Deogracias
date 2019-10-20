import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '@layout';

import Dashboard, { DashboardDrawerItem, DashboardHeaderItem } from '@route/dashboard';

interface RouterProps {}
const Router: FC<RouterProps> = () => {
  const renderRoute = (
      slot: JSX.Element,
      drawerItem: FC<{}>,
      headerItem: FC<{}>
    ) => {
    return (
      <Layout
        drawerItem={drawerItem}
        headerItem={headerItem}
      >
        {slot}
      </Layout>
    )
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => renderRoute(<Dashboard />, DashboardDrawerItem, DashboardHeaderItem)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;