
const express = require("express");
const router = express.Router();
const db = require("../init");
const bcrypt = require("bcrypt");

// Criar novo usuário
router.post("/register", async (req, res) => {
  const { nome, email, senha, cargo, unidade } = req.body;
  const hashedSenha = await bcrypt.hash(senha, 10);
  db.run(
    `INSERT INTO usuarios (nome, email, senha, cargo, unidade) VALUES (?, ?, ?, ?, ?)`,
    [nome, email, hashedSenha, cargo, unidade],
    function (err) {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, senha } = req.body;
  db.get(`SELECT * FROM usuarios WHERE email = ?`, [email], async (err, row) => {
    if (err || !row) return res.status(401).json({ erro: "Usuário não encontrado" });
    const match = await bcrypt.compare(senha, row.senha);
    if (!match) return res.status(401).json({ erro: "Senha inválida" });
    res.status(200).json({ mensagem: "Login bem-sucedido", usuario: row });
  });
});

// Listar todos os usuários
router.get("/", (req, res) => {
  db.all("SELECT id, nome, email, cargo, unidade FROM usuarios", [], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
});

module.exports = router;
