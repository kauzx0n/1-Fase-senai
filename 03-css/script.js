let resposta = document.getElementById('resultado')

Function 

//=====================================================================================

function calcularParImpar(){
  let n = Number(prompt("Digite numero, meu consagrado:"))
  if(n%2 == 0){
    alert("Par")
  }else{
    alert("Impar")
  }
}

//=====================================================================================

function mostrarDiaDaSemana(){
  // infos
  let numero, dia
  // leitura
  numero = Number(prompt("Digite o numero:"))
  // processamento
  if(numero == 1){
    dia = "Domingo"
  }else if(numero == 2){
    dia = "Segunda"
  }else if(numero == 3){
    dia = "Terça"
  }else if(numero == 4){
    dia = "Quarta"
  }else if(numero == 5){
    dia = "Quinta"
  }else if(numero == 6){
    dia = "Sexta"
  }else if(numero == 7){
    dia = "Sabado"
  }else {
    dia = "Numero incorreto"
  }

  // saidas
  document.getElementById('resultado').innerHTML = 'dia escolhido: ' + dia
}

//=====================================================================================

function adivinharNumero(){
    // infos
    let numero = Math.ceil(matchMedia.random()*3)
    let chute = Number(prompt("Chuta ai:"))
    // entradas
    if(chute == numero){
      resposta.innerHTML = "Acertou!"
    }else{
      resposta.innerHTML = "Errou!"
    }
    // proc

    // saidas
    
  }

//=====================================================================================

function verificarIdade(){
    // infos
    let idade
    // entradas
    idade = Number(prompt("Digite sua idade:"))
    // proc

    // saidas
    if(idade >= 18){
        resposta.innerHTML = "Voce é maior de idade"
    }else{
      resposta.innerHTML = "Voce é menor de idade "
    }
  }

//=====================================================================================

function calcularTransporte(){
    // infos
    let peso, distancia, volume, frete

    // leituras
   peso = Number(prompt("Qual o peso da carga?"))
   distancia = Number(prompt("Qual a distância da entrega?"))
   volume = Number(prompt("Qual o volume da carga?"))

    // proc
   if (peso > 0 && distancia > 0 && volume > 0) {
    // Cálculo seguindo a fórmula da Telles Transportes
   frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

    // saidas
    alert("O valor total do frete da Telles é R$ " + frete)
} else {
    alert("Erro: Todos os valores devem ser maiores que zero!")
}
}

// ====================================================================================

function verificarProvisoes(){
    // infos
   let marujos,comida
   let comidaPorMarujo
    // entradas
   marujos = Number(prompt("Quantidade de marujos:"))
   comida = Number(prompt("quilos de comida:"))
    // processamentos
   comidaPorMarujo = comida / marujos
    // saidas
   if(marujos >= 10 && comidaPorMarujo >= 1.5){ 
   document.getElementById('resultado').innerHTML = "provisoes suficientes. Rumo ao horizonte"
   }else{
   document.getElementById('resultado').innerHTML = "Algo esta errado. Posseidom nao quer ninguem no mar hoje."
  }
}

//=====================================================================================

function calcularPrecoBrique(){
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS
    precoCompra = Number(prompt("Preço de compra:"))
    // PROCESSAMENTO
    precoVenda  = precoCompra * 3
    // SAIDAS
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda R$" + precoVenda.toFixed(2))
    
    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2);
}