import path from 'path';
import express from 'express';

import sendFileOption from '@serverUtil/sendFileOption';

const mainRouter = express.Router();

const htmlFile = path.resolve(__dirname, './index.html');
mainRouter.get('/(*{0}|about|downloads|app)', (_, res) => {
	res.sendFile(htmlFile, sendFileOption());
});

export default mainRouter;