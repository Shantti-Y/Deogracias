import React, { FC } from 'react';
import { useHistory } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

import './style.scss';

interface LayoutProps { }
const Layout: FC<LayoutProps> = props => {
	const history = useHistory();

	const title = {
		label: 'Deogracias',
		command: () => history.push(`/`),
		style: { fontSize: '22px' }
	};

	const contentLinks = [
		{
			label: 'Home',
			icon: 'pi pi-home',
			command: () => history.push(`/`)
		},
		{
			label: 'News',
			icon: 'pi pi-envelope',
			command: () => history.push(`/news`)
		}
		/*
		 * {
		 *   label: 'About',
		 *   icon: 'pi pi-info',
		 *   command: () => history.push(`/about`)
		 * },
		 * {
		 *   label: 'Downloads',
		 *   icon: 'pi pi-download',
		 *   command: () => history.push(`/downloads`)
		 * },
		 */
	];

	const mobileMenu = [
		title,
		{
			icon: 'pi pi-bars',
			items: contentLinks
		}
	];

	const desktopMenu = [
		title,
		...contentLinks
	];

	return (
		<div className="header">
			<Menubar className="for-mobile" model={mobileMenu} />
			<Menubar className="for-desktop" model={desktopMenu} />
		</div>
	);
};
export default Layout;