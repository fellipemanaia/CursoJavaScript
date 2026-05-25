const p = document.getElementById("h1")
const botao = document.getElementById("botao")
const diminuir = document.getElementById("diminuir")
let num = 0
botao.addEventListener("click",()=>{
    num = num + 1
    p.innerText = num
})
diminuir.addEventListener("click",()=>{
    num=num -1
    p.innerText = num
})