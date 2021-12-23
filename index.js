const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
router.get("/", (req, res) => {
  res.status(200).json({ message: "Api Ok!" });
});

app.use(router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
