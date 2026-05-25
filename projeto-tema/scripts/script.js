const botao=document.getElementById("botaoTema")
const corpoPagina = document.body
const caixa= document.getElementById("caixa")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")

let modoEscuroAtivado= true
botao;addEventListener("click",()=>{
    if(modoEscuroAtivado===true){
        corpoPagina.style.backgroundColor="wheat"
        caixa.style.backgroundColor = "#FFFFFF"
        caixa.style.color = "#000000"
        modoEscuroAtivado = false
        botao.innerText = "Ativar modo escuro"
    }else{
        corpoPagina.style.backgroundColor="rgb(56, 55, 55)"
        caixa.style.backgroundColor = "black"
        caixa.style.color = "white"
        modoEscuroAtivado= true
        botao.innerText = "Ativar modo claro"
    }
})