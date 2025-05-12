
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("audio"), (req, res) => {
  if (!req.file) return res.status(400).send("Nenhum arquivo enviado.");
  res.json({ transcricao: "Exemplo de transcrição gerada pela IA" });
});

module.exports = router;
