
//exercicio do outro arquivo
// const produtos = [
//     { id: 1, nome: "Notebook", preco: 3500 },
//     { id: 2, nome: "Mouse", preco: 150 },
//     { id: 3, nome: "Teclado", preco: 200 },
//     { id: 4, nome: "Monitor", preco: 1200 }
// ]

// let filtro = produtos.filter(preco => preco > 500)

// let mapa = produtos.map(nomes => nomes.nome) 

// let prodPreco = produtos.map(prodPreco => prodPreco.preco) 
// let soma = prodPreco.reduce((aux,cont)=> aux + cont,0 );
// console.log(soma);

//exercicio 1 facil
let nomes = ["Ana", "Carlos", "João","Fellipe","Manuella"];

for(let i=0; i<nomes.length;i++){
    console.log(`${i} - ${nomes[i]}`)
}