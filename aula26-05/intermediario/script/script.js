const usuario= document.getElementById("usuario")
const senha = document.getElementById("senha")
const btn = document.getElementById("btn")
const form = document.getElementById("form")
const userCerto = "Fellipe"
const senhaCerta = "1234"
const novoElemento = document.createElement("p")
form.addEventListener("submit",(evento)=>{
    evento.preventDefault()//impede o recarregamento de pagina
    if(usuario.value === userCerto && senha.value === senhaCerta){
        novoElemento.innerText=`Bem vindo ${usuario.value}`
        form.appendChild(novoElemento)
    }else{
        novoElemento.innerText="Usuário ou senha incorretos"
        form.appendChild(novoElemento)
    }
})