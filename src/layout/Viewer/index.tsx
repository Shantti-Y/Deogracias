import React, { FC, useState } from 'react';

import DrawerMenu from '@component/DrawerMenu';
import HeaderMenu from '@component/HeaderMenu';

import './style.scss';

interface LayoutProps {
  drawerItem: FC<{}>;
  headerItem: FC<{}>;
}
const Layout: FC<LayoutProps> = props => {
  const [drawerOpened, setDrawerOpened] = useState(true);

  const layoutModeClassName = (): string => {
    return drawerOpened ? 'drawer-opened' : 'drawer-closed';
  }

  return (
    <div id="layout-viewer" className={layoutModeClassName()}>
      <DrawerMenu
        opened={drawerOpened}
        itemComponent={props.drawerItem}
        closed={() => setDrawerOpened(false)}
      />
      <div className="right-column">
        <HeaderMenu
          drawerOpened={drawerOpened}
          itemComponent={props.headerItem}
          drawerClicked={opened => setDrawerOpened(opened)}
        />
        <div className="page-container">
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Layout;