import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuario) navigate('/');
  }, []);

  const sair = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/');
  };

  return (
    <div>
      <h2>Bem-vindo ao Sistema DSEI</h2>
      <button onClick={sair}>Sair</button>
    </div>
  );
}
