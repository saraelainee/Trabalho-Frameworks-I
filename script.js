//------------------------------------------------------Produtos Existentes-----------------------------------------------------//
async function buscaDados() {
            const resposta = await fetch("http://localhost:8001/contemProdutos.html")
            console.log(resposta)
            if (resposta.status === 200) {
                const dados = await resposta.json()
                console.log(dados)
                const ul = document.getElementById("minhalistaContem")
                for (let i = 0; i < dados.length; i++) {

                    const obj = dados[i];

                    const li = document.createElement("li")

                    li.innerText = `${obj.idExistentes}. ${obj.nomeProdutosExistentes} - ${obj.quantidadeExistentes} - ${obj.categoriaExistentes}`

                    console.log(obj.nomeProdutosExistentes)

                    ul.appendChild(li)

                }


            } else {
                if (resposta.status === 400) {
                    const dados = await resposta.json()
                    alert(dados.mensagem)
                    console.log(obj.contemProdutos)
                } else {
                    console.log("Erro Desconhecido!")
                }
            }

        }
        buscaDados()


//------------------------------------------------------Produtos Existentes-----------------------------------------------------//
async function trataForm() {
            const idExistentesInput = document.getElementById("idExistentes")
            const contemProdutosInput = document.getElementById("nomeProdutosExistentes")
            const quantidadeProdutosInput = document.getElementById("quantidadeExistentes")
            const categoriaProdutosInput = document.getElementById("categoriaExistentes")

            const idExistentes = idExistentesInput.value
            const nomeProdutosExistentes = contemProdutosInput.value
            const quantidadeExistentes = quantidadeProdutosInput.value
            const categoriaExistentes = categoriaProdutosInput.value

            const objcontemProdutos = {
                idExistentes,
                nomeProdutosExistentes,
                quantidadeExistentes,
                categoriaExistentes
            }
            try {
                const resposta = await fetch("http://localhost:8001/contemProdutos", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(objcontemProdutos)
                })
                if(resposta.status===404){
                    console.log("Produto não foi excluído")
                }
                if(resposta.status===400){
                    const dados = await resposta.json()
                    alert(`Deu erro do lado do servidor\n" ${dados.mensagem}`)
                }
                if(resposta.status===200){
                    alert("Produto cadastrado com sucesso")
                }
            }catch(erro){
                console.log(erro)
                alert("Deu algo errado na requisição do post! \n"+ 
                "Você ligou o BACKEND com NPM RUN dev?")
            }
        }

    
        


    
//------------------------------------------------------Produtos a comprar-----------------------------------------------------//
async function buscaDadosComprar() {
            const resposta1 = await fetch("http://localhost:8001/produtosAComprar")
            console.log(resposta1)
            if (resposta1.status === 200) {
                const dados1 = await resposta1.json()
                console.log(dados1)
                const ul = document.getElementById("minhalistaFaltantes")
                for (let i = 0; i < dados1.length; i++) {

                    const obj = dados1[i];

                    const li = document.createElement("li")

                    li.innerText = `${obj.nomeProdutosFaltantes}`

                    console.log(obj.nomeProdutosFaltantes)

                    ul.appendChild(li)

                }


            } else {
                if (resposta1.status === 400) {
                    const dados1 = await resposta.json()
                    alert(dados1.mensagem)
                    console.log(obj.produtosAComprar)
                } else {
                    console.log("Erro Desconhecido!")
                }
            }

        }
        buscaDadosComprar()

async function trataFormFalta() {
            const produtosAComprarInput = document.getElementById("produtosAComprar")
            const nomeProdutosFaltantes = produtosAComprarInput.value

            const objprodutosAComprar = {
                nomeProdutosFaltantes
            }
            try {
                const resposta = await fetch("http://localhost:8001/produtosAComprar", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(objprodutosAComprar)
                })
                if(resposta.status===404){
                    console.log("Produto não foi excluído")
                }
                if(resposta.status===400){
                    const dados1 = await resposta.json()
                    alert(`Deu erro do lado do servidor\n" ${dados1.mensagem}`)
                }
                if(resposta.status===200){
                    alert("Produto cadastrado com sucesso")
                }
            }catch(erro){
                console.log(erro)
                alert("Deu algo errado na requisição do post! \n"+ 
                "Você ligou o BACKEND com NPM RUN dev?")
            }
        }