
const express = require("express");
const router = express.Router();
const db = require("../init");

router.post("/", (req, res) => {
  const { responsavel, aldeia, categoria, descricao } = req.body;
  db.run(
    "INSERT INTO chamados (responsavel, aldeia, categoria, descricao) VALUES (?, ?, ?, ?)",
    [responsavel, aldeia, categoria, descricao],
    function (err) {
      if (err) return res.status(500).json({ erro: "Erro ao salvar chamado." });
      res.status(201).json({ id: this.lastID, ...req.body });
    }
  );
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM chamados ORDER BY criado_em DESC", (err, rows) => {
    if (err) return res.status(500).json({ erro: "Erro ao buscar chamados." });
    res.json(rows);
  });
});

module.exports = router;
