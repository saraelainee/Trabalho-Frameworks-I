//Contem produtos
async function trataForm() {
            const contemProdutosInput = document.getElementById("nomeProdutosExistentes")
            const nomeProdutosExistentes = contemProdutosInput.value

            const objcontemProdutos = {
                nomeProdutosExistentes
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
async function trataForm() {
            const contemProdutosInput = document.getElementById("nomeProdutosAComprar")
            const nomeProdutosAComprar = contemProdutosInput.value

            const objcontemProdutos = {
                nomeProdutosExistentes
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