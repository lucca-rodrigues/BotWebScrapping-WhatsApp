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

  console.log("Listando produtos... ✅ ");

  const allProducts = await page.evaluate(() => {
    return products;
  });

  console.log("allProducts", allProducts);

  fs.writeFileSync(
    "./src/ScrapperResponses/products.json",
    JSON.stringify(allProducts, null, 2)
  );

  console.log("Arquivo criado com sucesso!  ✅ ✅ ✅ ");
  await page.close();
};

main();
