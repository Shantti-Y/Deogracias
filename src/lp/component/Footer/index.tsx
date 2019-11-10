import React, { FC } from 'react';
import { Link } from "react-router-dom";

import './style.scss';

interface LayoutProps { }
const Layout: FC<LayoutProps> = props => {
  return (
    <div className="footer">
      <div className="links">
        <Link className="footer-link" to="/">Home</Link>
        <Link className="footer-link" to="/news">News</Link>
      </div>
      <div className="copyright">
        <h2>Deogracias <span>©2019 Takahiro Yoshioka All rights reserved.</span></h2>
      </div>
    </div>
  )
}
export default Layout;