
const express = require("express");
const router = express.Router();

const mensagens = [];

router.post("/", (req, res) => {
  const msg = { id: mensagens.length + 1, ...req.body };
  mensagens.push(msg);
  res.status(201).json(msg);
});

router.get("/", (req, res) => {
  res.json(mensagens);
});

module.exports = router;
