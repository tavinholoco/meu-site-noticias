# Meu Site de Notícias

Sistema de site de notícias com frontend em React + Vite e backend em Node.js + Express.

## Estrutura do projeto

meu-site-noticias/
├─ backend/ # Código do backend
├─ frontend/ # Código do frontend
├─ docs/ # Documentação adicional
├─ .gitignore # Regras de arquivos ignorados
├─ README.md # Este arquivo

## Pré-requisitos

- Node.js >= 18
- npm >= 9

## Configuração do projeto

### Backend

1. Entre na pasta do backend:
   ```bash
   cd backend
Instale as dependências:

bash
Copiar código
npm install
Crie o arquivo .env baseado no .env.example:

bash
Copiar código
cp .env.example .env
Preencha as variáveis do .env com suas chaves e URLs reais.

### Frontend

Entre na pasta do frontend:

cd frontend


Instale as dependências:

npm install


Crie o arquivo .env baseado no .env.example:

cp .env.example .env


Configure a URL da API (VITE_API_URL) se necessário.

### Executando o projeto

Backend
cd backend
npm run dev

Frontend
cd frontend
npm run dev