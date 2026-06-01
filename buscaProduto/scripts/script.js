const placasMockados = {
    "RTX5060":{
        marca: "NVidia",
        gen:"5",
        memoria:"8gb ou 16gb",
        ano:"2025"
    },
    "RTX4070":{
        marca:"NVidia",
        gen:"4",
        memoria:"12gb",
        ano:"2023"
    },
    "RX9060XT":{
        marca:"AMD",
        gen:"4",
        memoria:"8gb ou 16gb",
        ano:"2025"
    },
    "ARCB580":{
        marca:"Intel",
        gen:"2",
        memoria:"12gb",
        ano:"2024"
    }
}
const campoPlaca=document.getElementById("placa")
const botaoBuscar=document.getElementById("botao-buscar")
const campoMarca=document.getElementById("marca")
const campoGen=document.getElementById("gen")
const campoMemoria=document.getElementById("memoria")
const campoAno=document.getElementById("ano")
function preencherCampos(dados){
    campoMarca.value=dados.marca
    campoGen.value=dados.gen
    campoMemoria.value=dados.memoria
    campoAno.value=dados.ano
}
function limparCampos(){
    campoMarca.value=""
    campoGen.value=""
    campoMemoria.value=""
    campoAno.value=""
}
function buscarPlaca(){
    const placa = campoPlaca.value
    if(placa.value === ""){
        alert("Placa inválida")
        limparCampos()
        return
    }
    const dadosPlaca=placasMockados[placa]

    if(!dadosPlaca){
        alert("Placa não encontrada na base de dados")
        limparCampos()
        return
    }
    preencherCampos(dadosPlaca)
}
botaoBuscar.addEventListener("enter",buscarPlaca)