import express from 'express';
import bodyParser from 'body-parser';

import router from '@serverRoute/index';

const mainApp = express();
const apiApp = express();

apiApp.use(router.apiRouter);

mainApp.use(bodyParser.json());
mainApp.use(bodyParser.urlencoded({ extended: true }));
mainApp.use(router.clientRouter);
mainApp.use('/api', apiApp);

mainApp.listen(
	3000,
	() => {
		console.log('Deogracias listening on port 3000!');
	}
);