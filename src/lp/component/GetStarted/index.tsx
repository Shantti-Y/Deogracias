import React, { FC } from 'react';

import './style.scss';

import { Button } from 'primereact/button';

interface LayoutProps { }
const Layout: FC<LayoutProps> = props => {
  return (
    <a href="/app" target="_blank"><Button label="Get Started" /></a>
  )
}
export default Layout;