# 🎤 Talker Manager

## 📡 Desenvolvimento

Projeto desenvolvido na <a href="https://betrybe.com/" target="_blank">Trybe</a> durante o módulo de Back-End!

Nesse projeto foi desenvolvido uma API em CRUD (Create, Read, Update e Delete) para uma aplicação de cadastro de talkers (palestrantes), onde é possivel cadastrar, visualizar, pesquisar, editar e excluir informações. Foi utilizado também Express.js e middlewares.

<br />

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:lauropera/trybesmith.git
```

### 2 - Na raíz do projeto, suba os containers `talker_manager` utilizando o docker-compose.

    docker-compose up -d --build

### 3 - Abra o terminal do container `talker_manager`.

    docker exec -it talker_manager bash

### 4 - No terminal do container, instale as dependências com o comando:

    npm install

### 5 - Agora execute a aplicação com o comando:

    npm start

</details>
<br />

## 📜 Habilidades

- Entender a diferença entre execução síncrona e assíncrona;
- Realizar operações assíncronas com callbacks e Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever os próprios scripts que criam e consomem Promises;
- Realizar chamadas de funções de forma consciente;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Escrever APIs utilizando Node e Express.

<br />

## 🔎 Rotas

### Login

<details>
  <summary><strong>POST /login</strong></summary>
  </br>
  • Se o login for feito com sucesso retorna um token para o usuário.
</details>

### Talkers

<details>
  <summary><strong>GET /talkers</strong></summary>
  </br>
  • Traz todos os talkers (palestrantes) do banco de dados.
  </br>
</details>

<details>
  <summary><strong>GET /talkers/search</strong></summary>
  </br>
  • Busca talkers pelo nome através da query "q".
  </br>
</details>

<details>
  <summary><strong>GET /talkers/:id</strong></summary>
  </br>
  • Traz um talker por id do banco de dados.
  </br>
</details>

<details>
  <summary><strong>POST /talkers</strong></summary>
  </br>
  • Cadastra um novo talker (pessoa palestrante).
  </br>
  • Valida o token - req.authorization.
</details>

<details>
  <summary><strong>PUT /talkers/:id</strong></summary>
  </br>
  • Atualiza um talker por ID.
  </br>
  • Valida o token - req.authorization.
</details>

<details>
  <summary><strong>DELETE /talkers/:id</strong></summary>
   </br>
  • Deleta um talker por id do banco de dados.
  </br>
  • Valida o token - req.authorization.
</details>

<br />

## ⚙️ Tecnologias

- JavaScript
- Node.js
- Express.js
- Docker

##

<div>
  <p align="center">🍐</p>
</div>
