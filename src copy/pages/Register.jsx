import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const cadastrar = async () => {
    try {
      await axios.post("http://localhost:3001/auth/register", { email, senha });
      setMensagem("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/"), 1500);
    } catch {
      setMensagem("Erro ao cadastrar.");
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
        background: "rgba(255,255,255,0.9)",
        padding: "2rem",
        borderRadius: "10px",
        width: "400px"
      }}>
        <h1 style={{ textAlign: "center" }}>Cadastro</h1>
        <input type="text" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <input type="password" placeholder="Senha"
          value={senha} onChange={e => setSenha(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <button onClick={cadastrar}
          style={{ width: "100%", backgroundColor: "#087f5b", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
          Cadastrar
        </button>
        <p style={{ color: "green", marginTop: "10px" }}>{mensagem}</p>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Já tem conta?{" "}
          <span onClick={() => navigate("/")} style={{ color: "#087f5b", cursor: "pointer" }}>Faça login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;