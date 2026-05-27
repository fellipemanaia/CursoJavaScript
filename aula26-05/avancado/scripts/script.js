const lista = document.getElementById("lista")
const botao = document.getElementById("botao-adicionar")
const input = document.getElementById("input")
const qtd = document.getElementById("qtd")
const limpar = document.getElementById("limpar")
let itens = []
let cont=0

function adicionarItem(){
    if(input.value!=""){
        lista.innerHTML=""
        cont++
        itens.push(input.value)
        itens.forEach(item => {
            const li = document.createElement("li")
            li.innerText=item
            li.style.color="#FF0000"
            input.value=""
            lista.appendChild(li)
            qtd.innerText="Quantidade de itens na lista: "+cont
        });
        alert("Item adicionado")
        input.focus() 
    }else{
        alert("Digite algo para adicionar!")
        input.focus()
    }
}

lista.addEventListener("dblclick", function(event) {
    if (event.target.tagName === "LI") {
        const textoItem = event.target.innerText;
        
        itens = itens.filter(item => item !== textoItem);
        
        event.target.remove();
        cont--
        qtd.innerText="Quantidade de itens na lista: "+cont
        alert("Item excluído!");
    }
});
lista.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const textoItem = event.target.innerText;
        
        itens = itens.filter(item => item !== textoItem);
        

        event.target.style.color= "#00FF00"
    }
});
limpar.addEventListener("click",()=>{
    lista.innerHTML=""
    cont=0
    qtd.innerText="Quantidade de itens na lista: "+cont
    alert("Lista Limpada")
})