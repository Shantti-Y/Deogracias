import * as React from "react";
import * as ReactDOM from "react-dom";

import '@asset/stylesheet/root.scss';

import MangaViewer from "@route/MangaViewer";

window.resizeTo(1000, 900);

ReactDOM.render(
	<MangaViewer />,
	document.getElementById("example")
);