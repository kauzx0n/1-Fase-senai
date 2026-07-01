let idades = [18,20,12,35,14,15,38,88,99]
let precos = []

const produtos = [
  "Camiseta Algodão", "Calça Jeans", "Tênis Esportivo", "Relógio de Pulso", "Mochila Escolar", "Fone de Ouvido", "Garrafa Térmica", "Jaqueta Corta-Vento", "Boné Aba Reta", "Óculos de Sol", "Carteira de Couro", "Cinto Social", "Meia Cano Alto", "Moletom com Capuz", "Bermuda Cargo", "Camisa Polo", "Sapato Social", "Chinelo de Dedo", "Perfume Importado", "Creme Hidratante", "Shampoo Anticaspa", "Protetor Solar", "Escova de Dentes", "Toalha de Banho", "Travesseiro Nasa", "Luminária de Mesa", "Teclado Mecânico", "Mouse Sem Fio", "Mousepad Gamer", "Carregador Portátil", "Caixa de Som Bluetooth", "Cabo HDMI", "Suporte para Notebook", "Pendrive 64GB", "Smartwatch", "Agenda 2026", "Caneta Esferográfica", "Caderno Universitário", "Pasta Executiva", "Organizador de Cabos", "Caneca de Cerâmica", "Garrafa de Vidro", "Avental de Cozinha", "Jogo de Facas", "Fradeira Elétrica", "Jogo de Chaves", "Trena Métrica", "Lanterna LED", "Cadeado de Latão", "Mala de Viagem"
];


function mostrarProdutos(){
    for(let i=0; i<produtos.length; i++){
        console.log(produtos[i]);
        document.getElementById('lista-precos').innerHTML += '<p class="produtos">' + produtos[i] + '</p>'
        
    }
}


// Prompt pra criar o array de nomes de produtos: crie um array js, Um único e simples array de string, com 50 posições e um nome de produto em cada posição

function array00(){

    // let i = 14
    // console.log("Idade: " + idades[i]);

    // console.log(idades.length);
    // console.log("Idade: " + idades[0]);
    // console.log("Idade: " + idades[1]);
    // console.log("Idade: " + idades[2]);
    // console.log("Idade: " + idades[3]);
    // console.log("Idade: " + idades[4]);
    // console.log("Idade: " + idades[5]);
    
    // for(let i=0; i<6; i++){
    //     console.log("Idade: " + idades[i]);

    // }
    for(let i=0; i<idades.length; i++){
        console.log("Idade: " + idades[i]);

    }
}

function addPrecos(){
    let n = Math.ceil(Math.random() * 100)

    precos.push(n)

    // console.log(precos);

    document.getElementById('lista-precos').innerHTML = ''
    for(let i=0; i<precos.length; i++){
        console.log(precos[i]);
        document.getElementById('lista-precos').innerHTML += precos[i] + ' - '
        
    }
    
}

function sortearAluno(){
    const alunos = [
  "Adriano", "Alisson", "Athos", "Beatriz", "Camilla", 
  "Cauê", "Daniel", "Diego", "Enzo", "Erick", 
  "Felipe", "Fernando", "Francisca", "Gabriel", "Guilherme", 
  "Gustavo", "Hizabele", "Ildo", "Isadora", "Jean", 
  "Jeniffer", "Joás", "José", "Julia", "Kauan", 
  "Luanna", "Luciano", "Luiz", "Marcos", "Mariom", 
  "Mattheus", "Ruhan", "Silvano", "Vinícius"
];

    console.log(alunos[Math.floor(Math.random()*alunos.length)])
}