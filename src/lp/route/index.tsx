import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '@lpLayout/index';


interface RouterProps {}
const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  )
}

export default Router;