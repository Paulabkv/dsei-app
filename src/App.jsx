import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState("");
  const [aldeia, setAldeia] = useState("");
  const [categoria, setCategoria] = useState("Emergência Médica");
  const [descricao, setDescricao] = useState("");
  const [resposta, setResposta] = useState(null);

  const iniciarVoz = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Reconhecimento de voz não suportado no seu navegador.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const resultado = event.results[0][0].transcript;
      setDescricao(prev => prev + ' ' + resultado);
    };

    recognition.onerror = (event) => {
      alert('Erro no reconhecimento de voz: ' + event.error);
    };

    recognition.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResposta({ nome, aldeia, categoria, descricao });
    setNome("");
    setAldeia("");
    setCategoria("Emergência Médica");
    setDescricao("");
  };

  return (
    <div className="container">
      <h1>Solicitação ao DSEI</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome do Responsável:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

        <label>Aldeia:</label>
        <input type="text" value={aldeia} onChange={(e) => setAldeia(e.target.value)} required />

        <label>Categoria:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option>Emergência Médica</option>
          <option>Transporte</option>
          <option>Visita Técnica</option>
          <option>Outro</option>
        </select>

        <label>Descrição da Solicitação:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva o problema aqui"
          rows="5"
          required
        ></textarea>

        <div className="botoes">
          <button type="button" onClick={iniciarVoz}>🎤 Falar</button>
          <button type="submit">Enviar Solicitação</button>
        </div>
      </form>

      {resposta && (
        <div className="resposta">
          <h2>Resumo da Solicitação:</h2>
          <p><strong>Responsável:</strong> {resposta.nome}</p>
          <p><strong>Aldeia:</strong> {resposta.aldeia}</p>
          <p><strong>Categoria:</strong> {resposta.categoria}</p>
          <p><strong>Descrição:</strong> {resposta.descricao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
