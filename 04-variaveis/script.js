

let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    // registrar venda no total
    total = total + valor
    // atualizar total na página
    document.getElementById('totalVendido').innerHTML =  
    'Total de vendas: R$' + total.toFixed(2)

    // lista de vendas
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>'
    
    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()


    console.log(valor)
}


let cont = 0
function incrementarContagem(){
    // cont = cont + 1
    // cont += 1
    cont++
    document.getElementById('p-contagem').innerHTML = cont
}

function decrementarContagem(){
    cont--
    document.getElementById('p-contagem').innerHTML = cont
}
function somar10(){
    cont = cont + 10
    // cont += 10
    document.getElementById('p-contagem').innerHTML = cont
}
function somar2(){
    cont += 2
    document.getElementById('p-contagem').innerHTML = cont
}
function zerarContagem(){
    cont = 0
    document.getElementById('p-contagem').innerHTML = cont
}







let global = 'Eu sou uma variável global :/'
function funcao1(){
    let local = 'Sou uma variável local :D'
    // let global = 'ME identifico como global'
    console.log(local);
    console.log(global);
}
function funcao2(){
    // let local
    console.log(global);
    // console.log(local);
}

// funcao1()
// funcao2()