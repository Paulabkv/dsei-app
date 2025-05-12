import React, { useState } from "react";
import axios from "axios";

function Solicitacao() {
  const [responsavel, setResponsavel] = useState("");
  const [aldeia, setAldeia] = useState("");
  const [categoria, setCategoria] = useState("Emergência Médica");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarChamado = async () => {
    try {
      await axios.post("http://localhost:3001/chamados", {
        responsavel,
        aldeia,
        categoria,
        descricao
      });
      setMensagem("Solicitação enviada com sucesso!");
      setResponsavel("");
      setAldeia("");
      setCategoria("Emergência Médica");
      setDescricao("");
    } catch {
      setMensagem("Erro ao enviar solicitação.");
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/src/assets/fundo.png')",
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.95)",
        padding: "2rem",
        borderRadius: "10px",
        width: "600px"
      }}>
        <h2 style={{ textAlign: "center" }}>Solicitação ao DSEI</h2>
        <label>Nome do Responsável:</label>
        <input type="text" value={responsavel} onChange={e => setResponsavel(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <label>Aldeia:</label>
        <input type="text" value={aldeia} onChange={e => setAldeia(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <label>Categoria:</label>
        <select value={categoria} onChange={e => setCategoria(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}>
          <option>Emergência Médica</option>
          <option>Transporte</option>
          <option>Suprimentos</option>
          <option>Outros</option>
        </select>
        <label>Descrição da Solicitação:</label>
        <textarea value={descricao} onChange={e => setDescricao(e.target.value)}
          rows="4" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ backgroundColor: "#087f5b", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
            🎤 Falar
          </button>
          <button onClick={enviarChamado}
            style={{ backgroundColor: "#087f5b", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
            Enviar Solicitação
          </button>
        </div>
        <p style={{ marginTop: "15px", color: mensagem.includes("erro") ? "red" : "green" }}>{mensagem}</p>
      </div>
    </div>
  );
}

export default Solicitacao;