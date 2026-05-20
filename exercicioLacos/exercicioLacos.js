// //exercicio 1 facil
// for(let i =1; i<=10;i++){
//     console.log(i);
    
// }

// //exercicio 2 facil
// let nf2 = Number(prompt("Digite um numero"))
// for(let i =1;i<=10;i++){
//     console.log(nf2*i);
    
// }

//exercicio 3 facil
// let nf3 =  Number(prompt("Digite um numero"))
// let soma=0
// while(nf3 !=0){
//     soma = soma+ nf3
//     nf3--
// }
// console.log(soma)


//exercicio 1 intermediario
// for(let i =1; i<=50;i++){
//     if(i %2==0){
//         console.log(i)
//     }
// }

//exercicio 2 intermediario
// let random = Math.floor(Math.random(100)*100)
// let digitado = Number(prompt("Digite um numero"))
// while(digitado != random){
//     if(digitado>random){
//         digitado=Number(prompt("Digite um numero menor"))
//     }else{
//         digitado = Number(prompt("Digite um numero maior"))
//     }
// }
// console.log(random)




// //exercicio 3 intermediario
// let ni3 = Number(prompt("Digite um numero"))
// while(ni3 != 0){
//     console.log(ni3)
//     ni3--
// }


//exercicio 4 intermediario
// let senha = prompt("Digite sua senha")
// while(senha != "1234"){
//     senha = prompt("Digite novamente")
// }
// console.log("Logado");


//exericio 5 intermediario
// let soma1=0
// let ni5 =0
// do{
//     ni5 = Number(prompt("Digite um numero"))
//     soma1 = soma1+ni5
// }while(ni5!=0)
// console.log(soma1);




//exercicio 6 intermediario
// let media = 0
// for(let i =1 ; i<=3;i++){
//     let numero = Number(prompt(`Digite o ${i} numero`))
//     media = media + numero 
//     if(i==3){
//         console.log(media/i)
//     }
// }



// //exercicio 1 avançado
// let nd1 = Number(prompt("Digite um numero grande"))
// let soma2 =0
// while(nd1 >10){
//     soma2= soma2+ nd1 %10 
//     nd1=nd1/10
//     nd1 = Math.floor(nd1)

// }
// soma2 = soma2+nd1
// console.log(soma2);




//exercicio 2 avançado
// let na2 = Number(prompt("Digite um numero"))
// for(let i =1;i<=10;i++){
//     console.log(`${na2} * ${i} = ${na2*i}`)
// }


//exercicio 3 avançado
// let na3 = prompt("Digite um numero")
// let cont= na3.length
// cont-=1
// let aux=""
// while(cont >-1){
//     aux = aux+na3[cont]
//     cont--
// }
// console.log(aux);


//exercicio 4 avançado
// let cont1=5
// let maior = 0
// do{
//     let na4 = Number(prompt("Digite um numero"))
//     if(na4>maior){
//         maior = na4
//     }
//     cont1--
// }while(cont1!=0)
// console.log(maior);


//exercicio 5 avançado
// let nomes = ["Fellipe", "Manuella","Millena","Leticia"]
// nomes.forEach(nome => {
//     console.log(nome)
// });


// //extra
// let produtos = ["mouse","teclado","monitor"]
// let prodDigitado = prompt("Digite um periférico de computador: ")
// let verdadeiro = false
// while(verdadeiro != true){
//     verdadeiro = produtos.includes(prodDigitado)
//     if(verdadeiro==false){
//         prodDigitado = prompt("Digite outro")
//     }
// }
// console.log(`Produto válido ${prodDigitado}`);
