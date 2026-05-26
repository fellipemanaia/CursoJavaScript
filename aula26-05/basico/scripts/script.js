const paragrafo = document.getElementById("paragrafo")
const btn = document.getElementById("botao")
const num=document.getElementById("num")
const caixa=document.getElementById("caixa")
let curtido = false
let cont=0
btn.addEventListener("click",()=>{
    if(curtido===false){
        cont= cont+1
        paragrafo.innerText = "<3 Curtido"
        num.innerText=`Número de curtidas: ${cont}`
        btn.innerText="Descurtir"
        caixa.style.backgroundColor="red"
        caixa.style.fontSize="50px"
        curtido = true
    }else{
        paragrafo.innerText="Não curtido"
        caixa.style.backgroundColor=""
        caixa.style.fontSize="15px"
        btn.innerText="Curtir"
        curtido=false
    }
})