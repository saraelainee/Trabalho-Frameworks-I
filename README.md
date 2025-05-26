# Projeto de Lista de Compras

Olá! Este é um projeto simples para ajudar a organizar suas compras. Com ele, você pode:

* Anotar os produtos que você **já tem** em casa.
* Criar uma lista dos produtos que você **precisa comprar**.

## O que este projeto faz?

Imagine que você tem duas listas no seu computador:

1.  **Lista de Coisas em Casa:** Aqui você anota o que já tem (ex: 2 caixas de leite, 1 pacote de arroz).
2.  **Lista de Coisas para Comprar:** Aqui você anota o que falta (ex: 1 pão, 3 maçãs).

O projeto tem:

* **Páginas da Internet (Front-end):** São as telas que você vê e usa no navegador (como o Google Chrome) para adicionar e ver os produtos.
* **Um "Cérebro" (Back-end):** É um programa que fica rodando escondido no seu computador. Ele guarda as informações das suas listas em um "caderno digital".
* **Um "Caderno Digital" (Banco de Dados):** É onde as listas de produtos são realmente guardadas.

## O que você precisa ter no computador?

1.  **Node.js:** É como um motor para fazer o "cérebro" do projeto funcionar. Você pode baixar [aqui](https://nodejs.org/).
2.  **Laragon ou XAMPP:** São programas que ajudam a criar e gerenciar o "caderno digital" (o banco de dados MySQL). O Laragon é geralmente mais simples para iniciantes.
    * [Laragon](https://laragon.org/download/)
    * [XAMPP](https://www.apachefriends.org/index.html)
3.  **Um navegador de internet:** Como Google Chrome, Firefox, etc.
4.  **Arquivos do projeto:** Os arquivos `index.html`, `contemProdutos.html`, `produtosAComprar.html`, `script.js`, `style.css` (que você já tem) e o `index.ts` (ou `index.js` se já estiver convertido).

## Como fazer o projeto funcionar (Passo a Passo)

Siga estes passos com calma:

### Passo 1: Preparar os arquivos do projeto

1.  Crie uma pasta no seu computador para o projeto (ex: `MinhaListaDeCompras`).
2.  Coloque todos os arquivos do projeto (`index.html`, `contemProdutos.html`, `produtosAComprar.html`, `script.js`, `style.css`, e o `index.ts`) dentro desta pasta.

### Passo 2: Ligar o "Caderno Digital" (Banco de Dados MySQL)

1.  **Abra o Laragon** (ou XAMPP).
2.  **Inicie o MySQL:** No Laragon, clique em "Start All" (ou apenas "MySQL"). No XAMPP, clique em "Start" ao lado de "MySQL".
3.  **Crie o "caderno":**
    * No Laragon, clique em "Database", o que deve abrir uma ferramenta chamada HeidiSQL.
    * No XAMPP, clique em "Admin" ao lado de MySQL, o que deve abrir o phpMyAdmin no seu navegador.
    * **Crie um novo banco de dados (database)** com o nome exatamente assim: `trabalho1Frameworks`
4.  **Crie as "páginas do caderno" (tabelas):**
    Dentro do banco de dados `trabalho1Frameworks` que você acabou de criar, você precisa rodar uns comandos para criar as "páginas" onde os produtos serão anotados. Copie e cole os comandos abaixo, um de cada vez, e execute:

    Para a lista de produtos que você JÁ TEM:
    ```sql
    CREATE TABLE contemProdutos (
        idExistentes INT,
        nomeProdutosExistentes VARCHAR(255),
        quantidadeExistentes INT,
        categoriaExistentes VARCHAR(100)
    );
    ```

    Para a lista de produtos que você PRECISA COMPRAR:
    ```sql
    CREATE TABLE produtosAComprar (
        idFaltantes INT,
        nomeProdutosFaltantes VARCHAR(255),
        quantidadeFaltantes INT,
        categoriaFaltantes VARCHAR(100)
    );
    ```
    * *O que são esses `INT`, `VARCHAR`? São tipos de dados. `INT` é para números inteiros (como o ID e a quantidade). `VARCHAR` é para textos (como o nome e a categoria).*
    * *`idExistentes` e `idFaltantes` são como o número da linha na sua lista, para identificar cada produto.*

### Passo 3: Ligar o "Cérebro" do Projeto (Back-end)

O arquivo `index.ts` é o "cérebro". Se ele é `.ts` (TypeScript), precisamos de um passo extra. Se você já tem um `index.js`, pode pular a parte de "compilar".

1.  **Abra o Terminal (ou Prompt de Comando):**
    * No Windows, procure por "cmd" ou "PowerShell".
    * No Mac, procure por "Terminal".
2.  **Vá até a pasta do seu projeto:**
    Use o comando `cd` seguido do caminho da sua pasta. Exemplo:
    ```bash
    cd C:\Users\SeuNome\Documentos\MinhaListaDeCompras
    ```
3.  **Instale as ferramentas necessárias:**
    Com o terminal aberto NA PASTA DO PROJETO, digite os comandos abaixo, um de cada vez, e pressione Enter:
    ```bash
    npm install fastify
    npm install mysql2
    npm install @fastify/cors
    ```
    Se o seu arquivo principal for `index.ts` (TypeScript), instale também:
    ```bash
    npm install -D typescript ts-node nodemon
    ```
    * *O que é `npm install`? Ele baixa essas ferramentas (fastify, mysql2, etc.) que o "cérebro" precisa para funcionar.*

4.  **Faça o "cérebro" começar a funcionar:**
    Ainda no terminal, na pasta do projeto:

    * **Se você tem o arquivo `index.ts` (TypeScript):**
        Você pode criar um atalho no arquivo `package.json`. Se não tiver um `package.json`, crie-o digitando `npm init -y` no terminal. Depois, abra o `package.json` e adicione a linha `"dev": "nodemon --exec ts-node index.ts"` dentro de `"scripts"`, assim:
        ```json
        {
          "name": "minhalistadecompras",
          "version": "1.0.0",
          "description": "",
          "main": "index.js", // ou index.ts
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "nodemon --exec ts-node index.ts" // ADICIONE ESTA LINHA OU MODIFIQUE
          },
          "keywords": [],
          "author": "",
          "license": "ISC"
          // ... outras coisas que o npm init -y criou ...
        }
        ```
        Depois de salvar o `package.json`, digite no terminal:
        ```bash
        npm run dev
        ```
    * **Alternativa para `index.ts` (mais simples, sem `nodemon`):**
        Primeiro compile:
        ```bash
        npx tsc index.ts
        ```
        Isso vai criar um arquivo `index.js`. Depois rode:
        ```bash
        node index.js
        ```
    * **Se você já tem o arquivo `index.js` (JavaScript):**
        Digite no terminal:
        ```bash
        node index.js
        ```

    Se tudo deu certo, você verá uma mensagem como: `Fastify iniciado na porta: http://127.0.0.1:8001` ou `http://localhost:8001`.
    **Importante:** Deixe esta janela do terminal aberta! Se você fechar, o "cérebro" para de funcionar.

### Passo 4: Usar as Telas no Navegador (Front-end)

1.  Vá até a pasta onde estão seus arquivos (`MinhaListaDeCompras`).
2.  Encontre o arquivo `index.html`.
3.  Dê dois cliques nele. Ele vai abrir no seu navegador de internet (Google Chrome, Firefox, etc.).

Agora você pode usar as listas!

* Você verá duas seções: "Lista de itens Existentes" e "Lista de itens Faltantes".
* Clique nos botões "Cadastrar Produtos..." para ir para as telas de adicionar novos produtos.
* Preencha os campos (ID, Nome, Quantidade, Categoria) e clique em "Enviar".
* Use o botão "Voltar" para ir para a tela inicial.

## Como as partes conversam? (De forma bem simples)

1.  **Você clica em algo na tela** (ex: botão "Enviar" depois de digitar um produto).
2.  **O `script.js` (no seu navegador)** pega essas informações.
3.  Ele envia uma mensagem pela internet (do seu navegador) para o **"cérebro" (`index.ts` ou `index.js` que está rodando no terminal)**. A mensagem vai para o endereço `http://localhost:8001`.
4.  O **"cérebro"** recebe a mensagem, entende o que você quer fazer (ex: adicionar um produto).
5.  Ele então escreve ou lê do **"caderno digital" (Banco de Dados MySQL)**.
6.  O "cérebro" manda uma resposta de volta para o `script.js` no seu navegador (ex: "Produto adicionado com sucesso!" ou "Deu erro!").
7.  O `script.js` mostra essa resposta para você na tela (atualizando a lista ou mostrando um alerta).

É isso! Se algum passo não funcionar, leia as mensagens de erro com calma, elas costumam dar dicas do que aconteceu. Boa sorte!
