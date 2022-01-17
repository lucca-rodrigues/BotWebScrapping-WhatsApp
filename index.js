const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const ScrapperController = require("./src/Controllers/ScrapperController");

app.use(bodyParser.json());
router.get("/", (req, res) => {
  res.status(200).json({ message: "Api Ok!" });
});
router.get("/products", ScrapperController.getProducts);
app.use(router);

app.listen(2000, () => {
  console.log("Server started on port 2000");
});
