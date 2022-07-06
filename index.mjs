import dotenv from "dotenv";
import puppeteer from "puppeteer";
import { format } from "date-fns";
// const client = require("./twClient.js");
import rwClient from "./twClient.mjs";

dotenv.config();

// const client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string
// //   bearer_token: process.env.TWITTER_BEARER_TOKEN as string
// });

// async function grabGithubData(): {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto(
//       "https://github.com/users/snehel4510/contributions?from=2022-01-01"
//     );
//     let contribs = await page.$$eval("[data-count]", (val) =>
//       val.reduce((acc, val) => acc + +(val.getAttribute("data-count")!) , 0)
//     );
//     // console.log(contribs);
//     const currentYear = format(new Date(), "yyyy");
//     await browser.close();
//     return `${currentYear} Github Contribs: ${contribs}`;
//   }

const grabGithubData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://github.com/users/snehel4510/contributions?from=2022-01-01"
  );
  let contribs = await page.$$eval("[data-count]", (val) =>
    val.reduce((acc, val) => acc + +val.getAttribute("data-count"), 0)
  );
  // console.log(contribs);
  const currentYear = format(new Date(), "yyyy");
  await browser.close();
  return `${currentYear} Github Contribs: ${contribs}`;
};

async function main() {
  const ans = await grabGithubData();
  const param = {
    Location: ans,
  };

  await rwClient.post("account/update_profile", param);
  console.log("Success! Updated Twitter profile location");
}

main().catch((err) => console.log(err));
