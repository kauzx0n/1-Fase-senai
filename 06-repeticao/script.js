
// let contador = 0 // inicializando

// while(contador < 10){
//    alert("Contador: " + contador)

//    contador++ // contagem
// }// voltar e testar novamente

// alert("Não ehh menorr")

//  let peso

//  let contador = 0
//  while(contador < 10){
//     peso = Number(prompt("digite o peso:"))
//     if(peso>1.1 || peso<0.9){
//        alert("Fora tolerancia do peso")
//     }
//     contador++
// }

let total = 0

let i = 0//inicializacao
while(i < 2){// cond repet
    i++ // contagem
    let preco = Number(prompt("Digite o preco do " + i + "° produto: " ))
    total = total + preco
 
    Document.getElementById('total').innerHTML += i + "° produto "
}