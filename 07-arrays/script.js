
    let idades = [18,20,12,35,14,15]
    let precos = []

    const produtos = [
  "Notebook", "Smartphone", "Teclado", "Mouse", "Monitor",
  "Cadeira Gamer", "Mesa de Escritório", "Fone de Ouvido", "Microfone", "Webcam",
  "Impressora", "Roteador Wi-Fi", "Pen Drive 32GB", "HD Externo 1TB", "SSD 512GB",
  "Placa de Vídeo", "Placa Mãe", "Memória RAM 16GB", "Fonte 600W", "Gabinete",
  "Smart TV 50", "Tablet", "Console de Videogame", "Controle sem Fio", "Caixa de Som Bluetooth",
  "Projetor", "Smartwatch", "Pulseira Inteligente", "Cabo HDMI", "Cabo USB-C",
  "Carregador Rápido", "Power Bank", "Capa para Celular", "Película de Vidro", "Mochila para Notebook",
  "Caderno Universitário", "Caneta Esferográfica", "Lápis", "Borracha", "Marca-texto",
  "Grampeador", "Clipes de Papel", "Pasta Organizadora", "Calculadora Científica", "Cafeteira Elétrica",
  "Micro-ondas", "Liquidificador", "Batedeira", "Aspirador de Pó Robô", "Ventilador de Mesa"
];

function mostrarProdutos(){
    for(let i=0; i<produtos.length; i++){
        console.log(produtos[i]);
        document.getElementById('lista-precos').innerHTML += '<p class = "produtos">' + producao[c] + "</p>"
    }
}


// Dica do professor: você pode verificar o tamanho do array usando a propriedade length
console.log("Total de produtos:", produtos.length); // Saída esperada: 50

    // function array00(){

    // console.log("idades: " + idades[i]);

    ////console.log(idades.length);
    //console.log("idades: " + idades[0]);
    //console.log("idades: " + idades[1]);
    //console.log("idades: " + idades[2]);
    //console.log("idades: " + idades[3]);
    //console.log("idades: " + idades[4]);
    //console.log("idades: " + idades[5]);

//     for(let i=0; i<idades.length; i++){
//     console.log("idades: " + idades[i]);
  
//     }
// }

// match.ceil arredonda pra cima / 
function addPrecos(){
    let n = Math.ceil(Math.random() * 100)

    precos.push(n)
    
    // console.log(precos);

    document.getElementById('lista-precos').innerHTML = ""
    for(let i = 0; i<precos.length; i++){
      console.log(precos[i]);
      document.getElementById('lista-precos').innerHTML += precos[i] + " - "
    }

}