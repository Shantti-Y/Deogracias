import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import '@appAsset/stylesheet/root.scss';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

import Routes from "@lpRoute/index";

const App = () => (
	<Routes />
);
ReactDOM.render(
	<App />,
	document.getElementById("app")
);