import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '@app';
import Lp from '@lp';

window.addEventListener('DOMContentLoaded', () => {
	if(window.location.href.includes('app')){
		ReactDOM.render(
			<App />,
			document.getElementById("app")
		);
	}else{
		ReactDOM.render(
			<Lp />,
			document.getElementById("app")
		);
	}
})



