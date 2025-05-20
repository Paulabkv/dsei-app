import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/gostei.png';

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
        body: JSON.stringify({ nome, email, senha, cargo, unidade })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuário registrado com sucesso!");
        navigate("/login");
      } else {
        alert(data.erro || "Erro ao registrar usuário.");
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      alert("Erro ao tentar registrar.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '10px', width: '100%', maxWidth: '500px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Cadastro</h2>

        <label>Nome:</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="input" required />

        <label>E-mail:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input" required />

        <label>Senha:</label>
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className="input" required />

        <label>Cargo:</label>
        <input type="text" value={cargo} onChange={e => setCargo(e.target.value)} className="input" required />

        <label>Unidade de Saúde:</label>
        <input type="text" value={unidade} onChange={e => setUnidade(e.target.value)} className="input" required />

        <div className="botoes" style={{ marginTop: '20px' }}>
          <button onClick={handleRegister} className="button">Cadastrar</button>
        </div>

        <p style={{ marginTop: '15px' }}>
          Já tem conta? <a href="/login">Entrar</a>
        </p>
      </div>
    </div>
  );
}