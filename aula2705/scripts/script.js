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
    }
}