////exercicio 1 facil
let idade = Number(prompt("Digite sua idade: "))
if(idade <18){
    console.log("menor de idade")
}else{
    console.log("maior de idade")
}

//exericio 2 facil
let n = Number(prompt("Digite um numero"))
if(n <0){
    console.log("negativo")
}else{
    console.log("positivo")
}

//exercicio 3 facil
let nota = Number(prompt("Digite um numero"))
if(nota >=60 && nota<101){
    console.log("aprovado")
}else{
    console.log("reprovado")
}

//exercicio 4 facil
let n2 = Number(prompt("Digite um numero"))
if(n2 <0){
    console.log("negativo")
}else if(n2==0){
    console.log("0")
}else{
    console.log("positivo")
}

//exercicio 5 facil
let idade2 = Number(prompt("Digite sua idade: "))
if(idade2 <=18){
    console.log("Adulto")
}else if(idade2>=13 && idade2<18){
    console.log("Adolescente")
}else{
    console.log("criança")
}

//exercicio 6 facil
let n3 = Number(prompt("Digite um numero:"))
if(n3 % 2==0){
    console.log("par")
}else{
    console.log("impar")
}

//exercicio 1 medio
let n4 = Number(prompt("Digite um numero:"))
let n5 = Number(prompt("Digite outro numero:"))
let op = prompt("Digite uma operação: +,-,*,/")
switch(op){
    case "+":
        console.log(n4+n5)
        break
    case "-":
        console.log(n4-n5)
        break
    case "*":
        console.log(n4*n5)
        break
    case "/":
        console.log(n4/n5)
        break
    default:
        console.log("Operação invalida")
        break
}

//exercicio medio 2
let n6 = Number(prompt("Digite um numero:"))
let n7 = Number(prompt("Digite outro numero:"))
let n8 = Number(prompt("Digite outro numero:"))
if(n6>n7 && n6>n8){
    console.log(`o ${n6} é o maior`)
}else if(n7>n6 && n7>n8){
    console.log(`o ${n7} é o maior`)
}else{
    console.log(`o ${n8} é o maior`)
}

//exercicio medio 3
let compras = Number(prompt("digite o valor das suas compras"))
if(compras>100){
    console.log(`valor total ${compras*0.9}`)
}else{
    console.log(`valor final ${compras}`)
}

//exercicio medio 4
let user = prompt("Digite um numero:")
let senha = prompt("Digite outro numero:")
if(user == "admin" && senha=="1234"){
    console.log("login bem sucessido")
}else{
    console.log("Acesso negado")
}

//exercicio dificil 1
let n9 = Number(prompt("Digite um valor:"))
if(valor>= 100){
    console.log("Frete gratis")
}else if(valor>=50 && valor<100){
    console.log("frete: R$10")
}else{
    console.log("Frete: R$20")
}

//exercicio dificil 2
let idade3 = Number(prompt("Digite sua idade: "))
let temConvite= Boolean(prompt("Tem convite"))
if (idade3>=18 && temConvite==true ){
    console.log("Entra")
}else{
    console.log("vaza")
}

//exercicio dificil 3
let notas2= Number(prompt("Digite sua nota 0-100"))
if(notas2<60){
    console.log("Conceito F")
}else if(notas2>=60 && notas2<70){
    console.log("Conceito D")
}else if(notas2>=70 && notas2<80){
    console.log("Conceito C")
}else if(notas2>=80 && notas2<90){
    console.log("Conceito B")
}else if(notas2>=90){
    console.log("Conceito A")
}else{
    console.log("nota invalida")
}

//exercicio dificil 4
let peso = Number(prompt("Digite seu peso"))
let altura =  Number(prompt("digite sua altura"))
let imc = peso/(altura**2)
if(imc<18.5){
    console.log("magreza")
}else if(18.5 <= imc <25){
    console.log("normal")
}else if(25 <= imc <30 ){
    console.log("sobrepesa")
}else{
    console.log("obesidade")
}

//exercicio dificil 5
let estoque = 8
if(estoque>=10){
    console.log("Produto disponivel")
}else if(1 <= estoque <10){
    console.log("Ultimas unidades")
}else{
    console.log("Esgotado")
}