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
