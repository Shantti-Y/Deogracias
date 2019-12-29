import * as React from "react";
import { Provider } from 'react-redux';

import '@appAsset/stylesheet/root.scss';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

import store from '@appStore';
import Routes from "@appRoute";

//window.resizeTo(1000, 900);

const App = () => 
	<Provider store={store}>
		<Routes />
	</Provider>;

export default App;