const express = require("express");

const app = express();
const port = 3000;

// Middleware Logger
app.use(express.json());
app.use((req, res, next) => {
  console.log("this is logger");
  next();
});

// Middleware Post Checker

const middlewarePost = (req, res, next) => {
  const allowedSpesies = ["kucing", "anjing", "kelinci"];
  const { spesies } = req.body;
  const isExist = allowedSpesies.includes(spesies);

  if (isExist) {
    next();
  } else {
    res.status(400).send({ error: "Spesies not valid" });
  }
};

const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

app.get("/hewan", (req, res) => {
  res.status(200).send(hewan);
});

app.post("/hewan", middlewarePost, (req, res) => {
  const id = hewan.length + 1;
  const { nama, spesies } = req.body;

  hewan.push({ id, nama, spesies });

  const data = {
    message: "success adding one pets",
    hewan,
  };

  res.status(201).send(data);
});

app.get("/hewan/:id", (req, res) => {
  const { id } = req.params;

  const hewanFilter = [hewan.find((binatang) => binatang.id == id)];

  const data = {
    message: "success get data Pet",
    hewanFilter,
  };
  res.status(200).send(data);
});

app.put("/hewan/:id", (req, res) => {
  const { id } = req.params;
  const { nama, spesies } = req.body;
  const i = hewan.findIndex((binatang) => binatang.id == id);

  hewan[i] = { id, nama, spesies };

  const data = {
    message: " success update data Pet",
    hewan,
  };

  res.status(200).send(data);
});

app.delete("/hewan/:id", (req, res) => {
  const { id } = req.params;
  const { nama, spesies } = req.body;
  const i = hewan.findIndex((binatang) => binatang.id == id);

  hewan.splice(i, 1);

  const data = {
    message: " success delete data Pet",
    hewan,
  };

  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
