import path from 'path';
import express from 'express';


const mainRouter = express.Router();

const indexHtmlFile = path.resolve('./src/template/index.html');
mainRouter.get('/(*{0}|about/downloads)', (_, res) => {
  res.sendFile(indexHtmlFile);
});

export default mainRouter;