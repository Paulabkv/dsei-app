const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./backend/init"); // ajuste o caminho conforme seu projeto

// Cadastro de usuário
router.post("/register", async (req, res) => {
  const { nome, email, senha, cargo, unidade } = req.body;

  if (!email || !senha || !nome) {
    return res.status(400).json({ erro: "Campos obrigatórios ausentes." });
  }

  const hash = await bcrypt.hash(senha, 10);

  db.run(
    `INSERT INTO usuarios (nome, email, senha, cargo, unidade) VALUES (?, ?, ?, ?, ?)`,
    [nome, email, hash, cargo, unidade],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ erro: "Erro ao registrar usuário." });
      }
      return res.status(201).json({ mensagem: "Usuário registrado com sucesso" });
    }
  );
});

// Login do usuário
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  db.get(`SELECT * FROM usuarios WHERE email = ?`, [email], async (err, user) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ erro: "Erro no login." });
    }

    if (!user) {
      return res.status(401).json({ erro: "Usuário não encontrado." });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (senhaValida) {
      const token = jwt.sign({ email }, "segredo", { expiresIn: "1h" });
      return res.json({ token });
    } else {
      return res.status(401).json({ erro: "Credenciais inválidas." });
    }
  });
});

module.exports = router;