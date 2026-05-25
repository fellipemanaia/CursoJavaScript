//Dom -> Document Object model
//é a forma como o navegador organiza o html para que o js consigo acessar os elementos


//principais metodos de seleção de elementos no dom

/*
    getElementById -> serve para selecionar um elemento pelo seu ID

    querySelector -> serve para selecionar o 1º elemento que corresponde a um seletor CSS(tag(ex: p, h1,h2),ID,nome de classe)

    querySelectorAll -> serve para selecionar Todos os elementos que correspondem a um seletor

    getElementByClassName -> serve para selecionar todos os elementos que correspondem a uma classe
*/

//elementby id
// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText;
// console.log(titulo);
// console.log(valor);




//selector

// const titulo =  document.querySelector("#titulo") //chamando id

// const paragrafo = document.querySelector(".paragrafo") //chamando classe

// const h2 = document.querySelector("h2")//chamando tag

// console.log(titulo)
// console.log(paragrafo);
// console.log(h2);



//selectorall

// const elementos = document.querySelectorAll(".texto");
// //imprime o elemento (p)
// console.log(elementos)
// //imprime o valor do elemento
// elementos.forEach(elemento => console.log(elemento.innerText));
// //trocando o texto q ta dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "alterado");

// //trocando a tag
// elementos.forEach(elemento => elemento.innerHTML = "<h1>item</h1>")
// //trocando a cor da fonte da letra
// elementos.forEach(elemento => elemento.style.color = "#0000FF")



//eventos
// const botao = document.getElementById("btn")

// //adicionando um escutador de eventos no botão
// botao.addEventListener("click",()=>{
//     alert("vc clicou")
// })

//evento de digitação (input/keyup)
// const campo = document.getElementById("campo")
// const paragrafo = document.getElementById("resultado")

// campo.addEventListener("input",()=>{
//     paragrafo.innerText = campo.value
// })
// campo.addEventListener("keyup", ()=>{
//     paragrafo.innerText = campo.value
//     console.log("Tecla pressionada")
// })


//evento mouse
// const trocando = document.getElementById("troca-cor")
// const botao = document.getElementById("btn")
// //mouseover -> quando o mouse passa por cima do elemento
// trocando.addEventListener("mouseover",()=>{
//     trocando.style.backgroundColor==="#FF0000"
// })

// trocando.addEventListener("mouseout", ()=>{
//     botao.style.backgroundColor="#0000FF"
//     trocando.style.backgroundColor=""
// })



//pegar a posição do mouse
// document.addEventListener("mousemove",(evento)=>{
//     console.log("Posição de X", evento.clientY, "Posição de Y",evento.clientY)
// })


// //evento formulario
// const form = document.getElementById("form")
// // form.addEventListener("submit",(evento)=>{
// //     evento.preventDefault()//impede o recarregamento de pagina
// //     const nome = document.getElementById("nome").value
// //     console.log("Nome: "+ nome)
// // })


// const novoElemento = document.createElement("p")
// novoElemento.innerText="Elemento novo criado"
// form.appendChild(novoElemento)

// const botao = document.createElement("button")
// botao.innerText = "Excluir elemento"
// form.appendChild(botao)
// botao.addEventListener("click",(e)=>{
//     e.preventDefault()
//     novoElemento.remove()

//     //form.removeChild(novoElemento)
// })



const input = document.getElementById("input")
const add = document.getElementById("add")
const lista =document.getElementById("lista")
add.addEventListener("click",()=>{
    const valor = input.value;
    const li = document.createElement("li")
    li.innerText=valor
    lista.appendChild(li)
    input.value=""
})