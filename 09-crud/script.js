
// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir

// ctrl + ;

// const nomes = []
// const alturas = []




// console.log(dino);

let dinos = []

function salvarDados(){
    localStorage.setItem('dinos', JSON.stringify(dinos))
    
    // let texto = JSON.stringify(dinos)
    // localStorage.setItem('dinos', texto)
}

function carregarDados(){
    dinos = JSON.parse(localStorage.getItem('dinos')) || []
    
    // let textoLido = localStorage.getItem('dinos')
    // dinos = JSON.parse(textoLido)
}

function cadastrarDino() {

    carregarDados()

    const novoDino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value),
    }
    dinos.push(novoDino)

    console.log(dinos);

    limparFormulario()
    mostrarTodos()

    salvarDados()
}

function limparFormulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-altura').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''
    document.getElementById('input-id').value = ''

    document.getElementById('input-nome').focus()
}

function mostrarTodos(){
    document.getElementById('painel-dinos').innerHTML = '' 

    for(let i=0; i<dinos.length; i++){
        // alert(dinos[i].nome)
        document.getElementById('painel-dinos').innerHTML += 
        `<div class="card-dino">
            <h2>${dinos[i].nome}</h2>
            <p>Altura: ${dinos[i].altura}</p>
            <p>Cor: ${dinos[i].cor}</p>
            <p>Custo: ${dinos[i].custo}</p>
            <p>${dinos[i].id}</p>
        
        </div>
        ` 
    }
}


function testar() {
    
    // window.location.href = 'teste.html'

    carregarDados()

    localStorage.setItem('teste', 45)

    let testeDeLeitura = localStorage.getItem('teste')
    console.log(testeDeLeitura);
    

    dinos = [
        {
            id: 1718324500001,
            nome: "Rex",
            altura: 6.1,
            cor: "#8B4513", // Marrom
            custo: 150000
        },
        {
            id: 1718324500002,
            nome: "Velo",
            altura: 2.0,
            cor: "#2E8B57", // Verde escuro
            custo: 85000
        },
        {
            id: 1718324500003,
            nome: "Trike",
            altura: 3.0,
            cor: "#708090", // Cinza
            custo: 120000
        },
        {
            id: 1718324500004,
            nome: "Braqui",
            altura: 13.0,
            cor: "#556B2F", // Verde oliva
            custo: 250000
        },
        {
            id: 1718324500005,
            nome: "Ptero",
            altura: 1.5,
            cor: "#4682B4", // Azul aço
            custo: 95000
        }
    ]

    console.log(dinos);

}

function pesquisar(){
    let nomeProcurado = document.getElementById('input-nome').value

    for(let i = 0; i<dinos.length; i++){
        if(nomeProcurado == dinos[i].nome ){
            console.log(dinos[i]);
            document.getElementById('input-altura').value = dinos[i].altura
            document.getElementById('input-cor').value = dinos[i].cor
            document.getElementById('input-custo').value = dinos[i].custo
            document.getElementById('input-id').value = dinos[i].id
            console.log(i);
        }
        
    }

}

function salvarDino(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == dinos[i].id ){
            console.log(dinos[i]);
            dinos[i].altura = document.getElementById('input-altura').value 
            dinos[i].cor = document.getElementById('input-cor').value 
            dinos[i].custo = document.getElementById('input-custo').value 
            dinos[i].id = document.getElementById('input-id').value 
            console.log(i);
        }
    }
    mostrarTodos()
    limparFormulario()
}

function excluirDino(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == dinos[i].id ){
            console.log(dinos[i]);
            dinos.splice(i, 1)
            console.log(i);
        }
    }
    mostrarTodos()
    limparFormulario()
}