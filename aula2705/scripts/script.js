const inputTarefa = document.getElementById("input-tarefa")
const botaoAdicionar = document.getElementById("botao-adicionar")
const listaTarefas = document.getElementById("lista-tarefas")

let tarefas = []
//função para salvar tarefas no local storage
function salvarTarefas(){
    /*
        localStorage-> armazenamento local do navegador
        satItem-> salva no armazenamento o conteudo recebido
        JSON.stringfy(tarefa) -> ega a lista de tarefas, converte para texto
    */
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
}
function mostrarTarefas(){
    listaTarefas.innerHTML=""
    for(let i=0;i<tarefas.length;i++){
        const li = document.createElement("li")
        li.innerText=tarefas[i]

        const botaoRemover = document.createElement("button")
        botaoRemover.innerText="🗑️"
        botaoRemover.className="botao-remover"
        botaoRemover.addEventListener("click",()=>{
            removerTarefas(i)
        })
        li.appendChild(botaoRemover)
        listaTarefas.appendChild(li)
    }
}

function removerTarefas(posTarefa){
    //splice (posição, quantidade de itens para remover)
    tarefas.splice(posTarefa,1)
    //atualiza o local storage
    salvarTarefas()
    //atualiza a tela
    mostrarTarefas()
}

function adicionarTarefa(){
    const valorTarefa = inputTarefa.value

    if(valorTarefa.trim()===""){
        alert("digite uma Tarefa!")
        return
    }

    tarefas.push(valorTarefa)
    inputTarefa.value=""
    salvarTarefas()
    mostrarTarefas()
}
function carregarTarefas(){
    //pega as tarefas e armazena na variavel tarefasSalvas
    const tarefasSalvas = localStorage.getItem("tarefas")
    
    //se existir alguma coisa dentro de tarefasSalvas
    //entao converte a tarefa e mostra na tela
    if(tarefasSalvas){
        //transforma o texto que esta no localStorage em array
        tarefas=JSON.parse(tarefasSalvas)
        mostrarTarefas()
    }    
}

botaoAdicionar.addEventListener("click",adicionarTarefa)
carregarTarefas()