const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rotas
app.use("/auth", require("./auth"));
app.use("/chamados", require("./backend/routes/chamados"));
app.use("/audio", require("./audio"));
app.use("/mensagens", require("./backend/routes/mensagens"));

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});