const diasdasemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'] // Usamos o const quando queremos guardar um valor em uma variável e temos certeza de que não vamos mudar o valor dessa variável direto depois.
const frutas = ['banana', 'maçã', 'uva']
const amigo = ['Alice', 'Bob', 'Charlie']
const amigo1 = ['Dave', 'Eva', 'Frank']
const idade = [25, 30, 28, 22, 26, 24]
const compras = ['Maçãs', 'Pão', 'Leite']
const listanumeros = [3,6,9]
const cidades = ['Paris', 'Londres', 'Nova York']
compras.push("Ovos","Arroz")
frutas.push("morango")
function inverter(){
    diasdasemana.reverse() // reverse troca a posição dos elementos um com o outro, por exemplo, nessa linha, segunda[0] vai trocar de lugar com doming[6] no caso só trocariam de lugar
    document.getElementById("resultado").innerHTML = diasdasemana
}

function add(){
    diasdasemana.push("Feriado")
    document.getElementById("resultado").innerHTML = diasdasemana
}
function remove(){
    diasdasemana.pop()
    document.getElementById("resultado").innerHTML = diasdasemana
}

function num(){
    const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    pares.splice(2,1, ("12")) //va na variavel pares e a partir do da posição 2 (q é 6), delete 1 elemento, (o elemento 6), e substitua o 6 por "12"
    document.getElementById("resultado").innerHTML = pares
}

function frt(){
    frutas.splice(1,1) // va na variavel frutas na posição 1(maçã) e remove 1 elemento a partir dessa possivel.
    document.getElementById("resultado").innerHTML = frutas   
}

function juntar() {
    amigo1.forEach((nome) => { // o foreach ele vai passar por cada elemento da variavel amigo1 e vai depositar na variavel nome
        // a variavel nome so existe dentro do forEach

        // 2. A cada volta, a variável 'nome' carrega um amigo solto. no primeiro loop vai pegar "Dave" e vai depositar na variavel amigo, usando o .push, mesma coisa até acabar o array 

        // O push pega esse nome solto e joga no fim do array 'amigo'.
        amigo.push(nome);
        
    });
    document.getElementById("resultado").innerHTML = amigo;
}

function soma(){
    let soma = idade[0] + idade[1]
    document.getElementById("resultado").innerHTML = soma;
}

function media(){
    let soma = 0
    idade.forEach((numero) =>{
        soma = soma + numero
    })
    soma = soma/idade.length
    document.getElementById("resultado").innerHTML = soma.toFixed(4);
}
function compra(){
    compras.splice(2,1) // vá no elemento leite(compras[2]) e retire 1 elemento a partir de compras[2]
    document.getElementById("resultado").innerHTML = compras
}
function verdadeiro(){
    const contempao = compras.includes("Pão") // criamos a variavel contempao para ser o true/false. dai botamos a variavel.includes("pão") nesse caso estamos verificando se pao está dentro da variavel compras, se estiver contempao vai dar true se nao existir o pao vai dar false
    document.getElementById("resultado").innerHTML = contempao
}

function repete(){
    const numeros = []
    for(let c =1;c<=9;c = c+2){
        numeros.push(c)
    }
    document.getElementById("resultado").innerHTML = numeros
}

function multiplicar(){
    let resultado = []
    listanumeros.forEach((multi)=>{
        multi = multi *2
        resultado.push(multi)
    })
    document.getElementById("resultado").innerHTML = resultado
}
function cidade(){
    document.getElementById("resultado").innerHTML = "Eu adoraria visitar " + cidades[0] + " e " + cidades[1]
}