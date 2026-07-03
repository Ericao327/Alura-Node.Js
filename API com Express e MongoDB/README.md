# API com Express e MongoDB

Projeto desenvolvido durante a trilha de back-end da [Alura](https://www.alura.com.br/), construindo uma API REST em Node.js utilizando **Express** e **MongoDB**. O código evolui ao longo de dois cursos, partindo de uma API básica até chegar em uma aplicação mais robusta, com tratamento de erros, buscas avançadas, filtros e paginação.

## 📚 Cursos de referência

- [Node.js: criando uma API Rest com Express e MongoDB](https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb)
- [Node.js: lidando com buscas, filtros, paginação e erros em uma API](https://cursos.alura.com.br/course/node-js-buscas-filtros-paginacao-erros-api)

## 🚀 O que o projeto faz

A API expõe rotas para o cadastro e consulta de **livros** e **autores**, persistindo os dados em um banco MongoDB (via Mongoose). Ao longo dos cursos, o projeto vai ganhando camadas de qualidade:

- Estrutura de rotas, controladores e modelos separados por responsabilidade
- Conexão com o MongoDB (local ou MongoDB Atlas) usando variáveis de ambiente
- Operações CRUD completas para livros e autores
- Relacionamento entre as coleções de livros e autores
- Buscas e filtros avançados usando operadores do MongoDB
- Paginação reutilizável entre diferentes rotas
- Tratamento centralizado de erros (validação, id não encontrado, erros gerais) através de middlewares
- Configuração de lint com ESLint para manter o padrão de código

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) / [MongoDB](https://www.mongodb.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) (ambiente de desenvolvimento)
- [ESLint](https://eslint.org/)

## 📁 Estrutura do projeto

```
src/
├── app.js               # Configuração do Express e das rotas
├── config/
│   └── dbConnect.js      # Conexão com o MongoDB
├── controllers/          # Regras de negócio das rotas (livros e autores)
├── models/                # Schemas do Mongoose
├── routes/                # Definição das rotas da API
├── erros/                 # Classes de erros customizados (ex: erro de validação)
└── middlewares/           # Middlewares (paginação, erro 404, manipulador de erros)
server.js                  # Ponto de entrada da aplicação
.env                        # Variáveis de ambiente (não versionado)
```

> A estrutura pode variar um pouco conforme o avanço nas aulas, já que o projeto é construído incrementalmente ao longo dos dois cursos.

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone git@github.com:Ericao327/Alura-Node.Js.git
   cd "Alura-Node.Js/API com Express e MongoDB"
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a string de conexão do MongoDB:
   ```
   DB_CONNECTION_STRING=sua_string_de_conexao_do_mongodb
   ```

4. Inicie o servidor em modo desenvolvimento:
   ```bash
   npm run dev
   ```

5. A API estará disponível em `http://localhost:3000` (ou na porta configurada).

## 🔍 Principais rotas

| Método | Rota            | Descrição                          |
|--------|-----------------|-------------------------------------|
| GET    | `/livros`       | Lista livros (com filtros e paginação) |
| GET    | `/livros/:id`   | Busca um livro por id               |
| POST   | `/livros`       | Cadastra um novo livro              |
| PUT    | `/livros/:id`   | Atualiza um livro existente         |
| DELETE | `/livros/:id`   | Remove um livro                     |
| GET    | `/autores`      | Lista autores                       |
| GET    | `/autores/:id`  | Busca um autor por id               |
| POST   | `/autores`      | Cadastra um novo autor              |
| PUT    | `/autores/:id`  | Atualiza um autor existente         |
| DELETE | `/autores/:id`  | Remove um autor                     |

## 📝 Observações

- O arquivo `.env` **não deve** ser commitado — ele já deve estar listado no `.gitignore`.
- Para testar as rotas, recomenda-se usar ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).
- Este repositório tem fins de estudo, acompanhando o conteúdo das aulas da Alura.

## 👤 Autor

Projeto desenvolvido por [Eric](https://github.com/Ericao327) durante os estudos de Node.js na Alura.

<<<<<<< HEAD
=======
>>>>>>> 781857e (Adicionando arquivo README.md)
