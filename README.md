# Trabalho Prático I - Frameworks I: Sistema de Lista de Compras

Este é um projeto simples para gerenciar uma lista de produtos em casa, uma lista de produtos a comprar e as categorias desses produtos. Foi desenvolvido para a disciplina de Frameworks I.

##  miembros del Grupo

* [Nome do Integrante 1]
* [Nome do Integrante 2]
* [Nome do Integrante 3]

## Tema Escolhido

O sistema é um **Gerenciador de Lista de Compras Domésticas e Despensa**. Ele permite que o usuário:
1.  Cadastre e visualize os produtos que já possui em casa/despensa.
2.  Cadastre e visualize os produtos que precisa comprar.
3.  Cadastre e visualize categorias para organizar os produtos.

## Funcionalidades Implementadas

O projeto é composto por 3 funcionalidades distintas, cada uma com operações de leitura (listar) e escrita (cadastrar):

1.  **Gerenciamento de Produtos em Casa:**
    * Permite cadastrar produtos que você já tem (ex: "Arroz", "Feijão").
    * Lista os produtos existentes.
    * Campos: ID, Nome do Produto, Quantidade, Categoria.
    * Endpoints: `GET /contemProdutos`, `POST /contemProdutos`
    * Interface: `contemProdutos.html` (para cadastro) e exibição na `index.html`.

2.  **Gerenciamento da Lista de Compras:**
    * Permite cadastrar produtos que você precisa comprar.
    * Lista os produtos que faltam.
    * Campos: ID, Nome do Produto, Quantidade, Categoria.
    * Endpoints: `GET /produtosAComprar`, `POST /produtosAComprar`
    * Interface: `produtosAComprar.html` (para cadastro) e exibição na `index.html`.

3.  **Gerenciamento de Categorias:**
    * Permite cadastrar categorias para os produtos (ex: "Alimentos", "Limpeza", "Higiene").
    * Lista as categorias existentes.
    * Endpoints: `GET /categorias`, `POST /categorias` (Exemplo, adaptar no código)
    * Interface: Uma nova página HTML (ex: `categorias.html`) para listar e cadastrar categorias.

## Tecnologias Utilizadas

* **Back-end:**
    * Node.js
    * Fastify.js (Framework Node.js)
    * MySQL (Banco de Dados)
    * TypeScript
* **Front-end:**
    * HTML5
    * CSS3
    * JavaScript (Puro)
* **Ambiente de Desenvolvimento:**
    * VS Code (Editor de Código)
    * Laragon (Ambiente de desenvolvimento local com Apache/Nginx, MySQL, Node.js)
    * MySQL Workbench (Para gerenciar o banco de dados)

## Instruções para Rodar o Projeto Localmente

**Pré-requisitos:**

* Ter o **Laragon** instalado e rodando com os serviços de **MySQL** e **Node.js** (ou ter Node.js e MySQL instalados separadamente).
* Ter o **VS Code** ou outro editor de sua preferência.
* Ter o **MySQL Workbench** (ou outro cliente MySQL como o HeidiSQL que vem com o Laragon) para facilitar a criação do banco e tabelas.

**Passos:**

1.  **Clone o Repositório (ou baixe os arquivos):**
    * Coloque a pasta do projeto dentro da pasta `www` do seu Laragon (ex: `C:/laragon/www/meu-projeto-frameworks`).

2.  **Configure o Banco de Dados:**
    * Abra o MySQL Workbench (ou o HeidiSQL).
    * Certifique-se que o serviço MySQL do Laragon está rodando.
    * Crie um novo banco de dados (schema) chamado `trabalho1Frameworks` (se ainda não existir).
    * Execute os seguintes comandos SQL para criar as tabelas:

        ```sql
        -- Tabela para produtos existentes na despensa
        CREATE TABLE IF NOT EXISTS contemProdutos (
            idExistentes INT PRIMARY KEY,
            nomeProdutosExistentes VARCHAR(255) NOT NULL,
            quantidadeExistentes INT,
            categoriaExistentes VARCHAR(100)
        );

        -- Tabela para produtos que precisam ser comprados
        CREATE TABLE IF NOT EXISTS produtosAComprar (
            idFaltantes INT PRIMARY KEY,
            nomeProdutosFaltantes VARCHAR(255) NOT NULL,
            quantidadeFaltantes INT,
            categoriaFaltantes VARCHAR(100)
        );

        -- Tabela para a funcionalidade de Categorias de Produtos
        CREATE TABLE IF NOT EXISTS categorias (
            idCategoria INT AUTO_INCREMENT PRIMARY KEY,
            nomeCategoria VARCHAR(255) NOT NULL UNIQUE
        );
        ```
    * *Observação:* As credenciais de acesso ao banco no código (`index.ts`) estão como `user: 'root'` e `password: ""`. Se as suas forem diferentes, ajuste no código (`src/index.ts`).

3.  **Instale as Dependências do Back-end:**
    * Abra um terminal (pode ser o terminal do VS Code ou o "Terminal" do Laragon) na pasta raiz do projeto (ex: `C:/laragon/www/meu-projeto-frameworks`).
    * Execute o comando:
        ```bash
        npm install
        ```
        Este comando vai ler o arquivo `package.json` (certifique-se que ele existe e lista as dependências como `fastify`, `mysql2`, `@fastify/cors`, `typescript`, `ts-node-dev`, `@types/node`) e baixar tudo o que o backend precisa.

4.  **Rode o Back-end (API):**
    * No mesmo terminal, na pasta raiz do projeto, execute:
        ```bash
        npm run dev
        ```
        (Este comando assume que você tem um script `dev` no seu `package.json`. Um exemplo de `package.json` mínimo seria:
        ```json
        {
          "name": "trabalho1-frameworks",
          "version": "1.0.0",
          "description": "",
          "main": "src/index.ts",
          "scripts": {
            "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
            "build": "tsc"
          },
          "keywords": [],
          "author": "",
          "license": "ISC",
          "dependencies": {
            "@fastify/cors": "^9.0.1", // Ou a versão que você instalou
            "fastify": "^4.27.0",     // Ou a versão que você instalou
            "mysql2": "^3.10.0"       // Ou a versão que você instalou
          },
          "devDependencies": {
            "@types/node": "^20.14.2", // Ou a versão que você instalou
            "ts-node-dev": "^2.0.0",   // Ou a versão que você instalou
            "typescript": "^5.4.5"     // Ou a versão que você instalou
          }
        }
        ```
        Se você não usa `ts-node-dev`, compile com `npm run build` (que roda `tsc`) e depois rode o arquivo JavaScript gerado em `dist/index.js` com `node dist/index.js`).
    * Você deverá ver uma mensagem como `Fastify iniciado na porta: http://127.0.0.1:8001`. Isso significa que sua API Node.js está rodando.

5.  **Acesse o Front-end:**
    * Abra seu navegador de internet (Chrome, Firefox, etc.).
    * Se você colocou o projeto na pasta `www` do Laragon, você pode geralmente acessar através de um endereço como `http://meu-projeto-frameworks.test/index.html` (o Laragon cria um host virtual com o nome da pasta, adicionando `.test` ao final) ou `http://localhost/meu-projeto-frameworks/index.html`.
    * Alternativamente, você pode simplesmente abrir o arquivo `index.html` da pasta do seu projeto diretamente no navegador (clicando duas vezes nele no seu explorador de arquivos). O JavaScript nos arquivos HTML fará as chamadas para a API que está rodando em `http://localhost:8001`.

## Diagrama Básico de Fluxo de Dados

```mermaid
sequenceDiagram
    participant Usuário (Navegador)
    participant Frontend JS
    participant Backend API (Fastify)
    participant Banco de Dados (MySQL)

    Usuário (Navegador)->>Frontend JS: Preenche formulário (ex: Novo Produto) e clica Enviar
    Frontend JS->>Backend API (Fastify): POST /recurso (com dados do produto)
    Backend API (Fastify)->>Backend API (Fastify): Valida dados recebidos
    alt Dados Válidos
        Backend API (Fastify)->>Banco de Dados (MySQL): INSERT INTO tabela VALUES (...)
        Banco de Dados (MySQL)-->>Backend API (Fastify): Sucesso/ID do novo registro
        Backend API (Fastify)-->>Frontend JS: Resposta JSON { sucesso: true, dados }
        Frontend JS->>Usuário (Navegador): Exibe mensagem de sucesso e atualiza lista
    else Dados Inválidos
        Backend API (Fastify)-->>Frontend JS: Resposta JSON { erro: "Mensagem de erro" }
        Frontend JS->>Usuário (Navegador): Exibe mensagem de erro
    end

    Usuário (Navegador)->>Frontend JS: Página carrega / Solicita lista
    Frontend JS->>Backend API (Fastify): GET /recurso
    Backend API (Fastify)->>Banco de Dados (MySQL): SELECT * FROM tabela
    Banco de Dados (MySQL)-->>Backend API (Fastify): Retorna linhas da tabela
    Backend API (Fastify)-->>Frontend JS: Resposta JSON [ {produto1}, {produto2} ]
    Frontend JS->>Usuário (Navegador): Exibe a lista de produtos na página
