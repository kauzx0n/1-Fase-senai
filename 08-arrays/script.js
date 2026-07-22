

const nomes = [
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
];

let idades = [22, 33, 32]


let produtos = ["Meia", "Pá de corte", "Suco de manga", "Leite"]
let precos = [665.9999, 777, 12, 4]


function adicionarProduto(){
    let preco, produto

    do{
        produto = prompt("Nome do produto:")
    }while(produto == '')

    do{
        preco = Number(prompt("Preço do produto:"))
    }while(preco <= 0)

    produtos.push(produto)
    precos.push(preco)

    verProdutosComPrecos()
}

function aumentarPrecos(){
    for(let i=0; i<precos.length; i++){
        precos[i] = precos[i] * 4
    }
    verProdutosComPrecos()
}

function removerUltimo(){
    produtos.pop()          // remove o produto
    precos.pop()            // remove o preço

    verProdutosComPrecos() // atualiza a lista na tela
}

function verProdutosComPrecos(){
    document.getElementById('listaProdutos').innerHTML = ''
    for(let i=0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + 
        j + "°: " + produtos[i] + " R$ " + 
        precos[i].toFixed(2).replace('.', ',') 
        + 
        "</p>"
    } 
}

function verProdutos(){
    // console.log(produtos);
    for(let i=0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + j + "°: " + produtos[i] + "</p>"
    } 
}




//Crie um array com os dias da semana.
let diaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 
    'Sábado', 'Domingo', 'Feriado'];


function diasDaSemana(){
    
console.log(diaSemana)
}

