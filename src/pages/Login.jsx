import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem('usuarioLogado', JSON.stringify(user));
      navigate('/home');
    } else {
      alert('Usuário ou senha inválidos');
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
