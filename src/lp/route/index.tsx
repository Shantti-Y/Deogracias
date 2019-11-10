import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '@lpLayout/index';

import Home from '@lpRoute/home';
import News from '@lpRoute/news';

interface RouterProps {}
const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/news" exact render={() => <News />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router;