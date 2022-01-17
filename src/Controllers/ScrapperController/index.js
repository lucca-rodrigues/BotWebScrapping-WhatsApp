const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("../../Configs/config");

class ScrapperController {
  async getProducts(req, res) {
    try {
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
    } catch (error) {
      console.log("Erro ao listar produtos: ", error.message);
      return res
        .status(500)
        .json({ message: "Erro ao carregar produtos no servidor" });
    }
  }
}

module.exports = new ScrapperController();
