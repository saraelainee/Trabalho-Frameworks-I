import mysql, { Connection, ConnectionOptions , QueryError } from 'mysql2/promise';
import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

const app = fastify()
app.register(cors)


//----------------------------------------PARA A PAGINA CONTEMPRODUTOS.HTML ---------------------------------//

// FUNÇÃO GET 

app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando!")
})
app.get("/contemProdutos.html", async (request: FastifyRequest, reply: FastifyReply) => {
   
    try {
        const conn = await mysql.createConnection( {
          host: "localhost",
          user: 'root',
          password: "",
          database: 'trabalho1Frameworks',
          port: 3306
      });
        const resultado = await conn.query("SELECT * FROM contemProdutos")
        const [dados,estruturaTabela] = resultado
        reply.send(dados)


    } catch (erro:any) {
        if (erro.code === "ECONNREFUSED") {
            console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGÃO!!! CABEÇA!"})
        } else if (erro.code === "ER_BAD_DB_ERROR") {
            console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO"})
        } else if(erro.code === "EER_DUP_ENTRY") {
            console.log("ERRO: CHAVE PRIMÁRIA DUPLICADA!")
            reply.status(400).send({mensagem:"ERRO: CHAVE PRIMÁRIA DUPLICADA"})
        }else if(erro.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
            console.log("ERRO: A CHAVE PRIMÁRIA ESTÁ VAZIA!")
            reply.status(400).send({mensagem:"ERRO: CHAVE PRIMÁRIA VAZIA"})
        } else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
            console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO DESCONHECIDO OLHE O TERMINAL"})
        }
    }
    
})

//FUNÇÃO POST

app.post("/contemProdutos", async (request: FastifyRequest, reply: FastifyReply) => {
    const {idExistentes, nomeProdutosExistentes, quantidadeExistentes, categoriaExistentes} = request.body as any

    //VERIFICAR SE O NOME É VAZIO
    try {
        const conn = await mysql.createConnection( {
          host: "localhost",
          user: 'root',
          password: "",
          database: 'trabalho1Frameworks',
          port: 3306
      });
        const resultado = await conn.query("INSERT INTO contemProdutos (idExistentes, nomeProdutosExistentes, quantidadeExistentes, categoriaExistentes) VALUES (?,?,?,?)",[idExistentes,nomeProdutosExistentes,quantidadeExistentes,categoriaExistentes])
        const [dados,estruturaTabela] = resultado
        reply.send(dados)


    } catch (erro:any) {
        switch (erro.code) {
            case "ECONNREFUSED":
                console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!");
                reply.status(400).send({ mensagem: "ERRO: LIGUE O LARAGÃO!!! CABEÇA!" });
                break;
            case "ER_BAD_DB_ERROR":
                console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO");
                reply.status(400).send({ mensagem: "ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO" });
                break;
            case "ER_ACCESS_DENIED_ERROR":
                console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO");
                reply.status(400).send({ mensagem: "ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO" });
                break;
            case "ER_DUP_ENTRY":
                console.log("ERRO: VOCÊ DUPLICOU A CHAVE PRIMÁRIA");
                reply.status(400).send({ mensagem: "ERRO: VOCÊ DUPLICOU A CHAVE PRIMÁRIA" });
                break;
            case "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD":
                console.log("ERRO: A CHAVE PRIMÁRIA VAZIA");
                reply.status(400).send({ mensagem: "ERRO: A CHAVE PRIMÁRIA VAZIA" });
                break;
            default:
                console.log(erro);
                reply.status(400).send({ mensagem: "ERRO DESCONHECIDO OLHE O TERMINAL DO BACKEND" });
                break;
        }
    }
    
})

























































//----------------------------------------PARA A PAGINA PRODUTOSACOMPRA.HTML ---------------------------------//

app.get("/:parametro", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando!")
})
app.get("/produtosAComprar", async (request: FastifyRequest, reply: FastifyReply) => {
   
    try {
        const conn1 = await mysql.createConnection( {
          host: "localhost",
          user: 'root',
          password: "",
          database: 'trabalho1Frameworks',
          port: 3306
      });
        const resultado = await conn1.query("SELECT * FROM produtosAComprar")
        const [dados,estruturaTabela] = resultado
        reply.send(dados)

//Verificação de erros
    } catch (erro:any) {
        if (erro.code === "ECONNREFUSED") {
            console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGÃO!!! CABEÇA!"})
        } else if (erro.code === "ER_BAD_DB_ERROR") {
            console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO"})
        } else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
            console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO DESCONHECIDO OLHE O TERMINAL"})
        }
    }
})



//FUNÇÃO POST
app.post("/produtosAComprar", async (request: FastifyRequest, reply: FastifyReply) => {
    const {idFaltantes, nomeProdutosFaltantes, quantidadeFaltantes, categoriaFaltantes} = request.body as any

    //VERIFICAR SE O NOME É VAZIO
    try {
        const conn1 = await mysql.createConnection( {
          host: "localhost",
          user: 'root',
          password: "",
          database: 'trabalho1Frameworks',
          port: 3306
      });
        const resultado1 = await conn1.query("INSERT INTO produtosAComprar (idFaltantes,nomeProdutosFaltantes,quantidadeFaltantes,categoriaFaltantes) values(?,?,?,?)",[idFaltantes,nomeProdutosFaltantes,quantidadeFaltantes,categoriaFaltantes])
        const [dados1,estruturaTabela1] = resultado1
        reply.send(dados1)

//Verificação de erros
    } catch (erro:any) {
        switch (erro.code) {
            case "ECONNREFUSED":
                console.log("ERRO: LIGUE O LARAGON");
                reply.status(400).send({ mensagem: "ERRO: LIGUE O LARAGON" });
                break;
            case "ER_BAD_DB_ERROR":
                console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS");
                reply.status(400).send({ mensagem: "ERRO: CONFIRA O NOME DO BANCO DE DADOS" });
                break;
            case "ER_ACCESS_DENIED_ERROR":
                console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO");
                reply.status(400).send({ mensagem: "ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO" });
                break;
            case "ER_DUP_ENTRY":
                console.log("ERRO: VOCÊ DUPLICOU A CHAVE PRIMÁRIA");
                reply.status(400).send({ mensagem: "ERRO: VOCÊ DUPLICOU A CHAVE PRIMÁRIA" });
                break;
            default:
                console.log(erro);
                reply.status(400).send({ mensagem: "ERRO DESCONHECIDO OLHE O TERMINAL DO BACKEND" });
                break;
        }
    }
    
})

//////////////////////////////////////////////////////////////////////////////////
app.listen({ port: 8001 }, (erro, endereco) => {
    if (erro) {
        console.log("ERRO: Fastify não iniciou")
    }
    console.log(`Fastify iniciado na porta: ${endereco}`)
})