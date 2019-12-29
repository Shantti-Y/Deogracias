import path from 'path';
import express from 'express';

const mainRouter = express.Router();

const lpHtmlFile = path.resolve('./src/lp/index.html');
mainRouter.get('/(*{0}|about/downloads)', (_, res) => {
	res.sendFile(lpHtmlFile);
});

export default mainRouter;