const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const product = products.find((product) => product.id === itemId);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
