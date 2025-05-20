import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token);
      navigate('/home');
    } else {
      alert(data.erro || 'Usuário ou senha inválidos');
    }
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Erro ao tentar fazer login.");
  }
};

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      <p>Não tem conta? <a href="/register">Cadastre-se</a></p>
    </div>
  );
}
