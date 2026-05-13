let resposta = document.getElementById('resultado')

function capitaoGansoMarujo(){
  // INFOS

  // ENTRADAS

  // PROCESSAMENTO

  // SAIDA

}

function calcularUber(){
  // infos
    let distancia , tempoSegundos , tempoMinutos , tempoDias , tempoHoras
    const velocidade = 300000
  // entradas
    distancia = Number(prompt("Distancia:"))
  // processamentos
    tempoSegundos = distancia / velocidade
  // saidas
    resposta.innerHTML = '<br>Tempo: ' + tempoSegundos + 'segundo(s) '
    // resposta.innerHTML = '<p>Tempo: ' + tempoSegundos + 'segundo(s)</p> '

    // segunda etapa
    if(tempoSegundos > 60){
      tempoMinutos = tempoSegundos / 60
      resposta.innerHTML += '<br>ou ' + tempoMinutos + 'Minuto(s)'
    }
    if(tempoMinutos > 60){
      tempoHoras = tempoMinutos / 60
      resposta.innerHTML += '<br>Ou ' + tempoHoras + ' hora(s)'
    }
    if(tempoHoras > 24){
      tempoDias = tempoHoras / 24
      resposta.innerHTML += '<br>Ou ' + tempoDias + ' Dia(s)'
    }

    resto = 6.75 % 1

}

function calcularTotalLoja(){
    // INFOS
    let precoParCalcado, paresTrocados
    let valorTotal
    // LEITURAS
    paresTrocados =Number(prompt("Quantidade de pares trocados:"))
    precoParCalcado = Number(prompt("Preço de cada par R$"))
    // PROCESSAMENTO
    
    // SAIDAS
    alert("Total de pares trocados" + paresTrocados)
    alert("A loja ira receber " + precoParCalcado)
    let prejuizo = lucro * -1
            mensagem = "total que a loja ira receber é de R$" + precoParCalcado.toFixed(2).replace('.',',')

    
    document.getElementById("resultado").innerHTML = valorTotal 
}

function verificarMeta(){
    // infos
     let totalBruto, premiacoes, presentes, comissoes
    // entradas
        totalBruto = Number(prompt("Total bruto:"))
        premiacoes = Number(prompt("Premiaçoes:"))
        presentes = Number(prompt("Presentinhos:"))
        comissoes = Number(prompt("Comissoes:"))
        meta = Number(prompt("Meta de hoje:"))
    // processamentos 
        lucro = totalBruto - premiacoes - presentes - comissoes

         let mensagem = ''
        if(lucro >= meta){
               // bateu a meta -
            mensagem = '👵Batemos a meta, Lucro de R$' + lucro.toFixed(2).replace('.',',')
       }else{
               // nao bateu a meta
        if(lucro > 0){
               // sem metas e prejuizo
            mensagem = 'Nao batemos a meta, mas tivemos lucro de R$' + lucro.toFixed(2).replace('.',',')
       }else{
              // sem meta e prejuizo
          let prejuizo = lucro * -1
            mensagem = '💀☠️⚔️🗡️🔫🦵Não batemos a meta e ainda tivemos prejuizo de R$' + prejuizo.toFixed(2).replace('.',',')
          }
        }

    // saidas
        resposta.innerHTML = "<br>Lucro de hoje: R$" + lucro.toFixed(2).replace('.',',') + '<br>' + mensagem 
}

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