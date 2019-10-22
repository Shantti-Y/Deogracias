import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import '@asset/stylesheet/root.scss';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"

import store from '@store';
import Routes from "@route";

window.resizeTo(1000, 900);

const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};
ReactDOM.render(
	<App />,
	document.getElementById("example")
);