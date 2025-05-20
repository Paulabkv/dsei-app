import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [unidade, setUnidade] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Usuário registrado com sucesso!");
      navigate("/login"); // Redireciona para a tela de login
    } else {
      alert(data.erro || "Erro ao registrar usuário.");
    }
  } catch (error) {
    console.error("Erro no registro:", error);
    alert("Erro ao tentar registrar.");
  }
};

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} />
      <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
      <input type="text" placeholder="Cargo" onChange={e => setCargo(e.target.value)} />
      <input type="text" placeholder="Unidade de Saúde" onChange={e => setUnidade(e.target.value)} />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}
