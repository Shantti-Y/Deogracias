import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import '@appAsset/stylesheet/root.scss';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"

import store from '@appStore/index';
import Routes from "@appRoute/index";

//window.resizeTo(1000, 900);

const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};
ReactDOM.render(
	<App />,
	document.getElementById("app")
);
console.log(document.getElementById("app"))