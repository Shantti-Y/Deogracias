import React, { FC } from 'react';

import './style.scss';

import Header from '@lpComponent/Header';
import Footer from '@lpComponent/Footer';

interface LayoutProps {}
const Layout: FC<LayoutProps> = props => {
  return (
    <div id="layout">
      <Header />
      <div className="body">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout;