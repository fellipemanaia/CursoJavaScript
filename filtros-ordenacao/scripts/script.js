const produtos = [
    { id: 1, nome: "Teclado Gamer", categoria: "Periféricos", preco: 120.90 },
    { id: 2, nome: "Mouse Sem Fio", categoria: "Periféricos", preco: 89.90 },
    { id: 3, nome: "Monitor 24 Polegadas", categoria: "Monitores", preco: 799.90 },
    { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.90 },
    { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.90 },
    { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.90 }
]
const campoBusca = document.getElementById("campoBusca")
const ordenacao = document.getElementById("ordenacao")
const listaProdutos = document.getElementById("lista-produtos")

function mostrarProdutos(){
    let textoBusca = campoBusca.value.toLowerCase()
    let produtosFiltrados = produtos.filter(produto=>produto.nome.toLowerCase().includes(textoBusca))
    

    if(ordenacao.value==="nome-az"){
        produtosFiltrados.sort((a,b)=>{
            //localeCompare -> faz uma comparação linguistica mais correta
            //negativo -> A vem antes
            //positivo -> B vem antes
            //0 -> sao iguais
            return a.nome.localeCompare(b.nome)
        })
    }
    if(ordenacao.value==="nome-za"){
        produtosFiltrados.sort((a,b)=>{
            //localeCompare -> faz uma comparação linguistica mais correta
            //negativo -> B vem antes
            //positivo -> A vem antes
            //0 -> sao iguais
            return b.nome.localeCompare(a.nome)
        })
    }
    if(ordenacao.value==="preco-menor"){
        produtosFiltrados.sort((a,b)=>{
            //subtrai os valores
            //se der negativo -> a vem antes do b(menor preco)
            //se der positivo -> b vem antes
            return a.preco - b.preco
        })
    } 
    if(ordenacao.value==="preco-maior"){
        produtosFiltrados.sort((a,b)=>{
            //subtrai os valores
            //se der negativo -> b vem antes do a(maior preco)
            //se der positivo -> a vem antes
            return b.preco - a.preco
        })
    }
    listaProdutos.innerHTML=""
    if(produtosFiltrados.length===0){
        listaProdutos.innerHTML = "<p class='mensagem'> Nenhum produto encontrado.</p>"
        return
    }
    for(let i=0;i<produtosFiltrados.length;i++){
        let produto=produtosFiltrados[i]
        listaProdutos.innerHTML +=`
            <div class='card'>
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p class='preco'>R$${produto.preco.toFixed(2).replace(".",",")}</p>
            </div>
        `
    }
}
//evento q dispara o input enquanto digitamos
campoBusca.addEventListener("input",()=>{
    mostrarProdutos()
})
//evento q dispara o select quando trocamos as options
ordenacao.addEventListener("change",()=>{
    mostrarProdutos()
})

mostrarProdutos()