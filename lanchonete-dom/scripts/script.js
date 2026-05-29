const inputPedido = document.getElementById("inputPedido")
const botaoAdicionar = document.getElementById("btnAdicionar")
const listaPedidos = document.getElementById("listaPedidos")
const botaoAtualizar = document.getElementById("btnAtender")

let pedidos = []
//função para salvar pedidos no local storage
function salvarPedidos(){
    /*
        localStorage-> armazenamento local do navegador
        satItem-> salva no armazenamento o conteudo recebido
        JSON.stringfy(tarefa) -> ega a lista de pedidos, converte para texto
    */
    localStorage.setItem("pedidos",JSON.stringify(pedidos))
}
function mostrarPedidos(){
    listaPedidos.innerHTML=""
    for(let i=0;i<pedidos.length;i++){
        const li = document.createElement("li")
        li.innerText=pedidos[i]

        const botaoRemover = document.createElement("button")
        botaoRemover.innerText="🗑️"
        botaoRemover.className="botao-remover"
        botaoRemover.addEventListener("click",()=>{
            removerPedidos(i)
        })

        li.appendChild(botaoRemover)
        listaPedidos.appendChild(li)
    }
}

function removerPedidos(posPedido){
    //splice (posição, quantidade de itens para remover)
    pedidos.splice(posPedido,1)
    //atualiza o local storage
    salvarPedidos()
    //atualiza a tela
    mostrarPedidos()
}

function adicionarPedido(){
    const valorPedido = inputPedido.value

    if(valorPedido.trim()===""){
        alert("digite uma Tarefa!")
        return
    }

    pedidos.push(valorPedido)
    inputPedido.value=""
    salvarPedidos()
    mostrarPedidos()
}
function carregarPedidos(){
    //pega as pedidos e armazena na variavel pedidosSalvos
    const pedidosSalvos = localStorage.getItem("pedidos")
    
    //se existir alguma coisa dentro de pedidosSalvos
    //entao converte a tarefa e mostra na tela
    if(pedidosSalvos){
        //transforma o texto que esta no localStorage em array
        pedidos=JSON.parse(pedidosSalvos)
        mostrarPedidos()
    }    
}

botaoAdicionar.addEventListener("click",adicionarPedido)
carregarPedidos()