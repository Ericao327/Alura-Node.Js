# 📚 API REST — Livraria com Node.js, Express e MongoDB

Projeto desenvolvido durante o curso [**Node.js: criando uma API Rest com Express e MongoDB**](https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb) da [Alura](https://www.alura.com.br), ministrado pela instrutora **Juliana Amoasei**.

---

## 📖 Sobre o Projeto

Esta API simula o sistema interno de uma **livraria**, permitindo gerenciar livros, autores e editoras. O projeto cobre desde a criação do servidor HTTP até a integração com banco de dados MongoDB, passando pela estruturação das rotas, modelos e controladores seguindo os princípios REST.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime JavaScript para o servidor |
| [Express](https://expressjs.com/) | Framework para criação de servidores e rotas HTTP |
| [MongoDB](https://www.mongodb.com/) | Banco de dados NoSQL orientado a documentos |
| [Mongoose](https://mongoosejs.com/) | ODM (Object Data Modeling) para MongoDB |

---

## 📂 Estrutura do Projeto

```
API com Express e MongoDB/
├── src/
│   ├── app.js               # Configuração do Express e middlewares
│   ├── models/              # Modelos Mongoose (Livro, Autor, Editora)
│   ├── routes/              # Definição das rotas da API
│   └── controllers/         # Lógica de negócio de cada recurso
├── server.js                # Criação e inicialização do servidor HTTP
├── package.json
└── .gitignore
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18.x ou superior
- [MongoDB Atlas](https://www.mongodb.com/atlas) ou instância local do MongoDB

### Passo a passo

1. **Clone o repositório:**

```bash
git clone https://github.com/Ericao327/Alura-Node.Js.git
cd "Alura-Node.Js/API com Express e MongoDB"
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto com as suas credenciais do MongoDB:

```env
DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome-do-banco>
PORT=3000
```

> ⚠️ **Nunca commite o arquivo `.env`!** Ele já deve estar listado no `.gitignore`.

4. **Inicie o servidor:**

```bash
node server.js
```

O terminal exibirá `servidor escutando!` e a API estará disponível em `http://localhost:3000`.

---

## 🗺️ Rotas da API

### Livros

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/:id` | Retorna um livro pelo ID |
| `POST` | `/livros` | Cadastra um novo livro |
| `PUT` | `/livros/:id` | Atualiza um livro pelo ID |
| `DELETE` | `/livros/:id` | Remove um livro pelo ID |

### Autores

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/autores` | Lista todos os autores |
| `GET` | `/autores/:id` | Retorna um autor pelo ID |
| `POST` | `/autores` | Cadastra um novo autor |
| `PUT` | `/autores/:id` | Atualiza um autor pelo ID |
| `DELETE` | `/autores/:id` | Remove um autor pelo ID |

### Editoras

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/editoras` | Lista todas as editoras |
| `GET` | `/editoras/:id` | Retorna uma editora pelo ID |
| `POST` | `/editoras` | Cadastra uma nova editora |
| `PUT` | `/editoras/:id` | Atualiza uma editora pelo ID |
| `DELETE` | `/editoras/:id` | Remove uma editora pelo ID |

---

## 📌 Exemplo de Requisição

### Criar um novo livro (`POST /livros`)

**Body (JSON):**
```json
{
  "titulo": "O Senhor dos Anéis",
  "editora": "HarperCollins",
  "preco": 79.90,
  "paginas": 1178,
  "autor": "<id_do_autor>"
}
```

**Resposta esperada (`201 Created`):**
```json
{
  "_id": "64c1a...",
  "titulo": "O Senhor dos Anéis",
  "editora": "HarperCollins",
  "preco": 79.90,
  "paginas": 1178,
  "autor": "<id_do_autor>"
}
```

---

## 📚 Conteúdos Abordados no Curso

- O que é uma API REST e como ela funciona
- Criação de um servidor HTTP nativo com Node.js
- Uso do framework **Express** para gerenciamento de rotas e middlewares
- Integração com banco de dados **MongoDB** via **Mongoose**
- Estruturação do projeto com separação de responsabilidades (Routes, Models, Controllers)
- Operações CRUD completas (Create, Read, Update, Delete)
- Relacionamento entre documentos (livros ↔ autores)
- Tratamento de erros e boas práticas de desenvolvimento back-end

---

## 🔗 Links Úteis

- [Repositório completo no GitHub](https://github.com/Ericao327/Alura-Node.Js)
- [Curso na Alura](https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb)
- [Documentação do Express](https://expressjs.com/pt-br/)
- [Documentação do Mongoose](https://mongoosejs.com/docs/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais com base no curso da Alura. Livre para uso e adaptação.
