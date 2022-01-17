const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("./Configs/config");

const main = async function () {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(config.url, {
    waitUntil: "load",
    timeout: 0,
  });

  await page.addScriptTag({ path: "./src/Scrappers/getProducts.js" });

  console.log("Listando produtos...");

  const allProducts = await page.evaluate(() => {
    return products;
  });
  // console.log("Listando produtos...");
  // const allProducts = await page.evaluate(() => {
  //   const products = Array.from(document.querySelectorAll("#ad-list li")).map(
  //     (item) => {
  //       return {
  //         title: item.querySelector("h2")?.innerText,
  //         link: item.querySelector("a")?.baseURI,
  //         image: item.querySelector("img")?.src,
  //         price: item.querySelector(".fnmrjs-9 span")?.innerText,
  //       };
  //     }
  //   );
  //   return products;
  // });

  console.log("allProducts", allProducts);

  fs.writeFileSync(
    "./src/ScrapperResponses/products.json",
    JSON.stringify(allProducts, null, 2)
  );

  console.log("Arquivo criado com sucesso!");
  await page.close();
};

main();
