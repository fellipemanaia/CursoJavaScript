// //variaveis
// /*
//     let -> quando o valor da variavel pode mudar, usamos let
//     var(evitar)-> forma antiga  
//     const-> quando o valor é imutavel(nao muda), usamos const

// */

// let nome = "Caio";
// const idade = 25;
// var cidade ="São paulo";

// console.log(nome + idade);
// nome = "Fellipe";
// console.log(nome)

// // nome=30;

// console.log(nome + cidade);
// //uso de virgula na concatenação somente com objetos
// console.log("Nome: "+nome);

// console.log(`Idade: ${idade}`);





// //TIPOS PRIMITIVOS

// //string
// let mensagem = "Ola, mundo";
// console.log(typeof(mensagem));

// //number
// let numero=3.444;
// console.log(typeof(numero));

// //boolean
// let verdadeiro=true;
// console.log(typeof(verdadeiro));

// //undefined
// let algo;
// console.log(typeof(algo));

// //null / object (intencional)
// let endereco=null;
// console.log(typeof(endereco));

// //conversão de dados
// //conversão implicita 
// let soma = "5"+3;
// let subtracao="5"-3;
// console.log(typeof(soma));
// console.log(soma);//continua como string(por causa do +)
// console.log(typeof(subtracao));
// console.log(subtracao);//vira number

// //conversão explicita
// //converter para numero
// let numro ="42";
// let cinvertodo =  Number(numro);
// console.log(typeof(cinvertodo));

// //converter numero para string
// let aa = 4;
// let convertido = String(aa);
// console.log(typeof(convertido));



//operador relacional
// > maior q ...
// < menor q ...
// >= maior ou igual q ...
// <= menor ou igual q ...
// == igualdade (ignora tipo de dado)
// === igualdade estrito (conta tipo de dado)
// != diferente (ignora tipo)
// !== diferente estrito (conta tipo)



//operador matematico
// + mais
// - subtração
// * multiplicacao
// / divisao
// % resto da divisão
// ** potencia


//operadores logicos
//  && and(e)
//  || or(ou)
//  ! not(nao, inverter)



//array
// let frutas= ["maçã", "banana", "uva"]
// console.log(frutas)
// console.log(frutas[1])
// console.log(frutas.length)


//Objeto
// let pessoa = {
//     nome: "Fellipe",
//     idade: 19
// }

// console.log(pessoa)
// console.log(pessoa.nome,pessoa.idade)



// let nome = prompt("Digite seu nome ")
// alert(`Ola, ${nome}`)

function mensagem(){
    alert("Seja bem vindo")
}