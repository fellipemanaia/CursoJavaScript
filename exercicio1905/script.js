const nome = prompt("Digite seu nome: ")
alert(`Bem vindo ${nome} a Hamburgueria do Fellipe`)
let lanche = prompt("Digite qual lanche vc quer: (X-tudo, X-Bacon, X-Salada)").toLowerCase()
let qtd = Number(prompt("Digite a quantidade que quer: "))
let total =0
let preco=0
switch(lanche){
    case "x-tudo":
        preco = 30
        total =  preco * qtd
        console.log(`==========Pedido do ${nome}=============`);
        console.log(`Nome: ${nome}`);
        console.log(`Lanche pedido: ${lanche}`);
        console.log(`Preço unitario: ${preco}`);
        console.log(`Quantidade Pedida: ${qtd}`);
        console.log(`Total do Pedido: ${total}`);
        console.log("Obrigado pela preferência");
        break
    case "x-bacon":
        preco = 25
        total =  preco * qtd
        console.log(`==========Pedido do ${nome}=============`);
        console.log(`Nome: ${nome}`);
        console.log(`Lanche pedido: ${lanche}`);
        console.log(`Preço unitario: ${preco}`);
        console.log(`Quantidade Pedida: ${qtd}`);
        console.log(`Total do Pedido: ${total}`);
        console.log("Obrigado pela preferência");
        break
    case "x-salada":
        preco = 20
        total =  preco * qtd
        console.log(`==========Pedido do ${nome}=============`);
        console.log(`Nome: ${nome}`);
        console.log(`Lanche pedido: ${lanche}`);
        console.log(`Preço unitario: ${preco}`);
        console.log(`Quantidade Pedida: ${qtd}`);
        console.log(`Total do Pedido: ${total}`);
        console.log("Obrigado pela preferência");
        break
        
    default:
        alert("Opção inválida")        
}