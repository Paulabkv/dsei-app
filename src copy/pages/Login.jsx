import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const logar = async () => {
    try {
      await axios.post("http://localhost:3001/auth/login", { email, senha });
      setMensagem("Login bem-sucedido!");
      // Redirecionar para Home ou tela protegida se quiser
    } catch {
      setMensagem("Falha no login.");
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
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <input type="text" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <input type="password" placeholder="Senha"
          value={senha} onChange={e => setSenha(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <button onClick={logar}
          style={{ width: "100%", backgroundColor: "#087f5b", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
          Entrar
        </button>
        <p style={{ color: "red", marginTop: "10px" }}>{mensagem}</p>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Não tem conta?{" "}
          <span onClick={() => navigate("/register")} style={{ color: "#087f5b", cursor: "pointer" }}>Cadastre-se</span>
        </p>
      </div>
    </div>
  );
}

export default Login;