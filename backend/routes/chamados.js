const express = require("express");
const router = express.Router();
const db = require("../init"); // ajuste o caminho se necessário

// Criar novo chamado
router.post("/", (req, res) => {
  const { responsavel, aldeia, categoria, descricao } = req.body;

  if (!responsavel || !aldeia || !descricao) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  db.run(
    `INSERT INTO chamados (responsavel, aldeia, categoria, descricao) VALUES (?, ?, ?, ?)`,
    [responsavel, aldeia, categoria, descricao],
    function (err) {
      if (err) {
        console.error("Erro ao inserir chamado:", err.message);
        return res.status(500).json({ erro: "Erro ao registrar chamado" });
      }
      res.status(201).json({
        id: this.lastID,
        responsavel,
        aldeia,
        categoria,
        descricao
      });
    }
  );
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM chamados", (err, rows) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao buscar chamados" });
    }
    res.json(rows);
  });
});

module.exports = router;