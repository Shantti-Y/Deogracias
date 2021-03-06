import express from 'express';
import cors from 'cors';

import { crawl } from '@serverUtil/webcrawler';

const apiRouter = express.Router();

apiRouter.options('/remote-site-images', cors());
apiRouter.post(
	'/remote-site-images',
	async(req: express.Request<{
    siteUrl: string;
    imageSelector: string;
    nextLinkSelector?: string;
    limitLinks: string
  }>, res: express.Response) => {
		console.log(req.body);
		const { siteUrl } = req.body;
		const { imageSelector } = req.body;
		const { nextLinkSelector } = req.body;
		const { limitLinks } = req.body;
		console.log("start fetching");
		const imageUrls = await crawl(siteUrl, imageSelector, parseInt(limitLinks), nextLinkSelector);

		res.set({
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
			'Access-Control-Allow-Headers': 'Content-Type,Authorization'
		});
		res.send({ imageUrls });
	}
);

export default apiRouter;