import puppeteer from 'puppeteer';

export const crawl = async (
  targetUrl: string,
  targetImageSrcSelector: string,
  limitLinks: number,
  nextLinkSelector?: string,
): Promise<string[]> => {
  const browser = await puppeteer.launch({
    // TODO: enable to switch executable path depending on OS
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
      request.abort();
    } else {
      request.continue();
    }
  });
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });

  let pageAccessed = true;
  let resultImageUrls = [];
  let clickedLinkCount = 0;

  if (nextLinkSelector){
    while (pageAccessed) {
      if (limitLinks > 0 && clickedLinkCount === limitLinks){
        break;
      }

      clickedLinkCount += 1;
      let imageUrls = await page.$$eval(targetImageSrcSelector, els => els.map(el => el.src));
      resultImageUrls = resultImageUrls.concat(imageUrls);
      let targetLinkElm = await page.$(nextLinkSelector);

      if (targetLinkElm) {
        const linkUrl = await page.$eval(nextLinkSelector, el => el.href);
        await page.goto(linkUrl, { waitUntil: 'networkidle2' });
      } else {
        pageAccessed = false;
      }
      console.log(imageUrls);
      console.log(clickedLinkCount);
    }
  }else{
    let imageUrls = await page.$$eval(targetImageSrcSelector, els => els.map(el => el.src));
    resultImageUrls = resultImageUrls.concat(imageUrls);
  }

  await browser.close();
  console.log(resultImageUrls);
  return resultImageUrls;
};