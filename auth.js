
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = [];

router.post("/register", async (req, res) => {
  const { email, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  users.push({ email, senha: hash });
  res.status(201).json({ mensagem: "Usuário registrado" });
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const user = users.find(u => u.email === email);
  if (user && await bcrypt.compare(senha, user.senha)) {
    const token = jwt.sign({ email }, "segredo");
    res.json({ token });
  } else {
    res.status(401).json({ erro: "Credenciais inválidas" });
  }
});

module.exports = router;
