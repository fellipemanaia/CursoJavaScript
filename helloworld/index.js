function mudarCor(){
            let cores = ["#FF5733","#3357FF","#33FF57","#FF33A1","#361c1c","#FF0000","#000000","#FFFFFF"];

            let corAleatoria= cores[Math.floor(Math.random()*cores.length)];

            document.body.style.backgroundColor = corAleatoria;
        }
function mudar(){
            const preto = "#000000";
            const branco= "#FFFFFF";
            const vermelho= "#FF0000";  
            // let cores =["#000000","#FFFFFF","#FF0000"];
            // let corAleatoria1= cores[Math.floor(Math.random()*cores.length)];
            // let corAleatoria= cores[Math.floor(Math.random()*cores.length)];
            // let corAleatoria2= cores[Math.floor(Math.random()*cores.length)];
            document.getElementById("corpo").style.background=vermelho;
            document.getElementById("fonte1").style.color=branco;
            
            let fonte2 = document.getElementById("fonte2");
            fonte2.style.backgroundColor = preto;
            fonte2.style.color=branco;

            document.getElementById("fonte3").style.color=branco;
        }