import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [unidade, setUnidade] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const novoUsuario = { nome, email, senha, cargo, unidade };
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(u => u.email === email)) {
      alert('Usuário já cadastrado');
      return;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso');
    navigate('/');
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
