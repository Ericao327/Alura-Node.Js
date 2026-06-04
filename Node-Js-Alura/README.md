# 📚 JavaScript com Node.js: Criando sua Primeira Biblioteca

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
  <img src="https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge" alt="Status"/>
</p>

> Projeto desenvolvido durante o curso **[JavaScript com Node.js: criando sua primeira biblioteca](https://cursos.alura.com.br/course/javascript-node-js-criando-primeira-biblioteca)** da [Alura](https://www.alura.com.br/), ministrado pela instrutora **Juliana Amoasei**.

---

## 📋 Sobre o Projeto

Este repositório contém o projeto prático do curso, que consiste na criação de uma **biblioteca JavaScript** utilizando **Node.js**. A biblioteca é capaz de **ler arquivos Markdown (.md)**, extrair links presentes no conteúdo e validá-los, funcionando tanto como módulo reutilizável quanto como ferramenta de linha de comando (CLI).

---

## 🎯 Conteúdo do Curso

O curso aborda os seguintes tópicos:

- **Iniciando um projeto Node.js** — estrutura de pastas, `package.json` e fundamentos
- **Usando a linha de comando** — criação de ferramentas CLI com Node.js
- **Lendo arquivos com `fs`** — módulo nativo do Node para manipulação de arquivos
- **Criando a lógica do projeto** — extração e processamento de links em arquivos Markdown
- **Tratamento de erros** — boas práticas para lidar com exceções
- **Import/export e Promessas** — módulos ES6 e programação assíncrona com `Promise`
- **O npm e suas bibliotecas** — gerenciamento de dependências e uso de pacotes externos

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript no servidor |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | Linguagem de programação principal |
| [npm](https://www.npmjs.com/) | Gerenciador de pacotes do Node.js |
| Módulo `fs` (nativo) | Leitura e manipulação de arquivos do sistema |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (já incluído com o Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Ericao327/Alura-Node.Js.git

# Acesse a pasta do projeto
cd Alura-Node.Js/Node-Js-Alura

# Instale as dependências
npm install
```

### Execução

```bash
# Execute o projeto passando o caminho de um arquivo Markdown
node index.js <caminho-do-arquivo.md>
```

**Exemplo:**
```bash
node index.js arquivos/texto1.md
```

---

## 📁 Estrutura do Projeto

```
Node-Js-Alura/
├── arquivos/           # Arquivos Markdown de exemplo para teste
├── index.js            # Arquivo principal — ponto de entrada da biblioteca
├── package.json        # Configurações e dependências do projeto
└── README.md           # Documentação do projeto
```

---

## ✨ Funcionalidades

- ✅ Leitura de arquivos `.md` via linha de comando
- ✅ Extração de links presentes no conteúdo Markdown
- ✅ Exibição dos links encontrados com texto e URL
- ✅ Tratamento de erros para arquivos inexistentes ou inválidos
- ✅ Uso de Promises para operações assíncronas

---

## 📖 Referências

- [Documentação oficial do Node.js](https://nodejs.org/docs/latest/api/)
- [Curso na Alura — JavaScript com Node.js: criando sua primeira biblioteca](https://cursos.alura.com.br/course/javascript-node-js-criando-primeira-biblioteca)
- [Repositório oficial do curso (Alura)](https://github.com/alura-cursos/2708-node-lib-md)

---

## 👤 Autor

Feito com 💙 por **Eric** — projeto de estudos desenvolvido como parte da formação em Node.js na Alura.

[![GitHub](https://img.shields.io/badge/GitHub-Ericao327-181717?style=flat-square&logo=github)](https://github.com/Ericao327)
