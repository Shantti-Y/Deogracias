import * as React from "react";
import * as ReactDOM from "react-dom";

import '@asset/stylesheet/root.scss';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import MangaViewer from "@route/PrimaSample";

window.resizeTo(1000, 900);

ReactDOM.render(
	<MangaViewer />,
	document.getElementById("example")
);