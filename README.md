# Sistema de Solicitações ao DSEI - Campo Grande/MS

Este projeto é uma aplicação web desenvolvida como parte do Projeto Integrador II do curso de Tecnologia da Informação. Seu objetivo é facilitar a comunicação entre representantes de aldeias indígenas e o Distrito Sanitário Especial Indígena (DSEI) de Campo Grande/MS, permitindo o envio de solicitações categorizadas de forma simples e acessível.

## 🚀 Funcionalidades

- Formulário com campos para:
  - Nome do responsável;
  - Nome da aldeia;
  - Categoria da solicitação;
  - Descrição detalhada do pedido;
- Suporte ao preenchimento da descrição via **reconhecimento de voz** (Web Speech API);
- Interface leve e responsiva, adaptada para desktop e dispositivos móveis;
- Exibição de resumo após o envio da solicitação.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/) (com Vite)
- HTML5
- CSS3
- JavaScript (ES6+)
- Web Speech API (nativa do navegador)

## 📂 Estrutura de Arquivos

```
📦 src
 ┣ 📜 App.jsx         → Componente principal da aplicação
 ┣ 📜 App.css         → Estilização visual dos elementos
 ┣ 📜 main.jsx        → Ponto de entrada da aplicação
 ┗ 📜 index.css       → Estilos globais (atualmente vazio)
📜 index.html         → HTML base com a div #root
```

## 🧑‍💻 Como Executar Localmente

> Pré-requisitos: [Node.js](https://nodejs.org/) e npm instalados.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse a aplicação em:  
[http://localhost:5173](http://localhost:5173)

> ⚠️ O reconhecimento de voz funciona apenas em navegadores compatíveis com a Web Speech API (como o Google Chrome).

## 📷 Capturas de Tela

![image](https://github.com/user-attachments/assets/31259904-d5b3-48f5-9e05-3fde974b6683)
![image](https://github.com/user-attachments/assets/73adac9a-fcdf-4e0e-a7da-b0d9c2c873c1)


## 🔧 Melhorias Futuras

- Implementação de categorização automática de chamados;
- Dashboard para acompanhamento das solicitações pelo DSEI;
- Geração automática de relatórios em PDF;

## 📄 Licença

Este projeto é de uso acadêmico e sem fins lucrativos.  
Para outras finalidades, entre em contato com os autores.

---

Desenvolvido por **André Baiocchi** e **Paula Prado** 
Curso de Tecnologia da Informação – UFMS
