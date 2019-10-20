import * as React from "react";
import * as ReactDOM from "react-dom";

import '@asset/stylesheet/root.scss';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import App from "@route";

window.resizeTo(1000, 900);

ReactDOM.render(
	<App />,
	document.getElementById("example")
);