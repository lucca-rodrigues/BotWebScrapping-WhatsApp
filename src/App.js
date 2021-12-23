const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("./Configs/config");

const main = async function (WhatsApp) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(config.url);
  // await page.addScriptTag({ path: "./Scrappers/getRestaurants.js" });
  // console.log("Listando produtos...");

  // const restaurants = await page.evaluate(() => {
  //   return restaurants;
  // });
  console.log("Listando produtos...");
  const allProducts = await page.evaluate(() => {
    const products = Array.from(document.querySelectorAll("#ad-list li")).map(
      (item) => {
        return {
          title: item.querySelector("h2")?.innerText,
          link: item.querySelector("a")?.baseURI,
          image: item.querySelector("img")?.src,
          price: item.querySelector(".fnmrjs-9 span")?.innerText,
        };
      }
    );
    return products;
  });
  console.log("allProducts", allProducts);

  await page.close();
};

main();
// module.exports = { main };
