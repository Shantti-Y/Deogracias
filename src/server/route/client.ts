import path from 'path';
import express from 'express';

const mainRouter = express.Router();

mainRouter.use(express.static('dist/public'));

const htmlFile = path.join(__dirname, 'index.html');
mainRouter.get('/(*{0}|about|downloads|app)', (_, res) => {
	res.sendFile(htmlFile);
});

export default mainRouter;