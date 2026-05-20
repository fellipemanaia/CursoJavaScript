// for(let i=4; i<=5;i++){
//     console.log("OI")
// }

// let cont = 1
// while(contador <=3){
//     console.log("Repetindo...");
//     console.log(cont);
//     cont++
// }

// let n =5
// do{
//     console.log(`executando ${n} vezes`);
    
//     n--
// }while(n!=0)

// let nomes = ["Fellipe", "Manuella","Millena","Leticia"]
// nomes.forEach(nome => {
//     console.log(nome)
// });

// let limite = Number(prompt("Mostrar numeros maiores q: "))
// for(let i = 1; i <=10; i++){
//     if(i>limite){
//         console.log(i);
        
//     }
// }

// let cores = ["Azul","Verde","Vermelho"]
// for(let i = 0; i<cores.length; i++){
//     console.log(cores[i])
// }

// let numero = [4,9,15,7]
// numero.forEach(n => {
//     if(n > 8){
//         console.log("Maior que 8 "+n);
//     }
// });


// for in usamos para objetos (chave/indice)
// const pessoa = {
//     nome:"Fellipe",
//     idade: 19,
//     prof: "aluno"
// }
// for(let chave in pessoa){
//     console.log(chave,pessoa[chave])
// }

//for of usamos para arrays dos objetos para retornarmos o valor
const produtos = [
    {
        nome:"Notebook",
        preco:3500,
        estoque:13
    },
    {
        nome:"Mouse",
        preco:40,
        estoque:63
    },
    {
        nome:"Teclado",
        preco:60,
        estoque:53
    }
] 

for(let produto of produtos ){
    console.log(produto.nome);
    
}

//imprimindo informaçoes
for(let produto of produtos){
    console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}, quantidade estoque:${produto.estoque}`)
}