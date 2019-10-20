import React, { FC } from 'react';
import { Sidebar } from 'primereact/sidebar';

import './style.scss';

interface DrawerMenuProps {
  opened: boolean;
  itemComponent: FC<{}>;
  closed: () => void;
}
const DrawerMenu: FC<DrawerMenuProps> = props => {

  const handleClosed = () => {
    props.closed();
  }
  return (
    <Sidebar
      modal={false}
      visible={props.opened}
      onHide={() => handleClosed()}
      showCloseIcon={false}
    >
      <div>
        Deogracias
      </div>
      <props.itemComponent />
    </Sidebar>
  )
}
export default DrawerMenu;