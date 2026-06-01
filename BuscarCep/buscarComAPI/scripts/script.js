const campoCep=document.getElementById("cep")
const botaoBuscar=document.getElementById("botao-buscar")
const campoRua=document.getElementById("rua")
const campoBairro=document.getElementById("bairro")
const campoCidade=document.getElementById("cidade")
const campoEstado=document.getElementById("estado")

function preencherCampos(dados){
    campoRua.value=dados.logradouro
    campoBairro.value=dados.bairro
    campoCidade.value=dados.localidade
    campoEstado.value=dados.uf
}
function limparCampos(){
    campoRua.value=""
    campoBairro.value=""
    campoCidade.value=""
    campoEstado.value=""
}
function buscarCep(){
    const cep = campoCep.value.replace(/\D/g,"").trim()
    if(cep.length !==8){
        alert("Cep inválido")
        limparCampos()
        return
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`
    //faz a requisição HTTP para a url da API
    //busca as informações dentro do VIACEP
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        if(dados.erro){
            alert("Cep não encontrado na base de dados")
            limparCampos()
            return
        }
        preencherCampos(dados)

    })
    .catch(()=>{
        alert("ERRO ao buscar cep")
    })
}
    
//botaoBuscar.addEventListener("enter",buscarCep)