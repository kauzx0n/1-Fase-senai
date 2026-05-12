let resposta = document.getElementById("resultado")
function idade(){
    let idade
    let mensagem = ""
    idade = Number(prompt("Idade:"))
    if(idade>=18){
        mensagem = "Você é maior de idade"
    }else if(idade<18)
        mensagem = "Você é menor de idade"
    resposta.innerHTML = mensagem
}
function advivinha(){
    let numero = Math.ceil(Math.random()*10) // math random gera um numero entre 0 e e 0.999.  *10 pra multiplicar. Math ceil arredonda o num pra cima. exemplo: 5.4 vira 6
    let chute = Number(prompt("Chuta ai (1-10):"))
    console.log(numero)
    if (chute == numero){
        resposta.innerHTML = "Acertou"
    }else
        resposta.innerHTML = "Errou"
}
function diasemana(){
    let numero = Number(prompt("Digite um numero para descobrir o dia:"))
    if (numero == 1){
        resposta.innerHTML = "Dia escolhido: Domingo"
    }else if(numero == 2){
        resposta.innerHTML = "Dia escolhido: Segunda"
    }else if (numero == 3){
        resposta.innerHTML = "Dia escolhido: Terça"
    }else if(numero == 4){
        resposta.innerHTML = "Dia escolhido: Quarta"
    }else if(numero == 5){
        resposta.innerHTML = "Dia escolhido: Quinta"
    }else if(numero == 6){
        resposta.innerHTML = "Dia escolhido: Sexta"
    }else if(numero == 7){
        resposta.innerHTML = "Dia escolhido: Sábado"
    }else
        resposta.innerHTML = "Numero incorreto, por favor tente novamente"
}
function numeropar(){
    numero
}