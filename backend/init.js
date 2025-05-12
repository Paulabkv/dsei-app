
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./banco.sqlite");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS chamados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    responsavel TEXT,
    aldeia TEXT,
    categoria TEXT,
    descricao TEXT,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;
