//------------------------------------------------------Produtos Existentes-----------------------------------------------------//
async function buscaDados() {
            const resposta = await fetch("http://localhost:8001/contemProdutos.html")
            console.log(resposta)
            if (resposta.status === 200) {
                const dados = await resposta.json()
                console.log(dados)
                const ul = document.getElementById("")
                for (let i = 0; i < dados.length; i++) {
                    const obj = dados[i];
 
                    const li = document.createElement("li")

                    li.innerText = `${obj.idExistentes}. ${obj.quantidadeExistentes} - ${obj.nomeProdutosExistentes} (${obj.categoriaExistentes})`

                    console.log(obj.idExistentes,obj.nomeProdutosExistentes,obj.nomeProdutosExistentes,obj.categoriaExistentes)

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
            const quantidadeExistentesInput = document.getElementById("quantidadeExistentes")
            const categoriaExistentesInput = document.getElementById("categoriaExistentes")

            const idExistentes = idExistentesInput.value
            const nomeProdutosExistentes = contemProdutosInput.value
            const quantidadeExistentes = quantidadeExistentesInput.value
            const categoriaExistentes = categoriaExistentesInput.value

            // Verificação de valores nulos ou vazios
            if (!idExistentes || !nomeProdutosExistentes || !quantidadeExistentes || !categoriaExistentes === 0) {
            alert("Todos os campos devem ser preenchidos!")
            return
            } 

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

                    li.innerText = `${obj.idFaltantes}. ${obj.quantidadeFaltantes}- ${obj.nomeProdutosFaltantes} (${obj.categoriaFaltantes})`

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
            const idFaltantesInput = document.getElementById("idFaltantes")
            const produtosFaltantesInput = document.getElementById("nomeProdutosFaltantes")
            const quantidadeFaltantesInput = document.getElementById("quantidadeFaltantes")
            const categoriaFaltantesInput = document.getElementById("categoriaFaltantes")

            const idFaltantes = idFaltantesInput.value
            const nomeProdutosFaltantes = produtosFaltantesInput.value
            const quantidadeFaltantes = quantidadeFaltantesInput.value
            const categoriaFaltantes= categoriaFaltantesInput.value

            // Verificação de valores nulos ou vazios
            if (!idFaltantes || !nomeProdutosFaltantes || !quantidadeFaltantes || !categoriaFaltantes === null) {
            alert("Todos os campos devem ser preenchidos!")
            return
            } 

            const objprodutosAComprar = {
                idFaltantes,
                nomeProdutosFaltantes,
                quantidadeFaltantes,
                categoriaFaltantes
            }


            try {
                const resposta1 = await fetch("http://localhost:8001/produtosAComprar", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(objprodutosAComprar)
                })
                if(resposta1.status===404){
                    console.log("Produto não foi excluído")
                }
                if(resposta1.status===400){
                    const dados1 = await resposta1.json()
                    alert(`Deu erro do lado do servidor\n" ${dados1.mensagem}`)
                }
                if(resposta1.status===200){
                    alert("Produto cadastrado com sucesso")
                }
            }catch(erro){
                console.log(erro)
                alert("Deu algo errado na requisição do post! \n"+ 
                "Você ligou o BACKEND com NPM RUN dev?")
            }
        }