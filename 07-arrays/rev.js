
function rodarWhile(){
    let i = 1 // 1o pilar
    while(i<50){ // 2o pilar
        i++ // 3o pilar
        console.log(i);
    }
}


function rodarFor(){
     
    for(let i=0; i<50; i++){
        // aqui só vai trampo
        console.log(i);
    }
}


function rodarDoWhile(){
    let i = 100000 // 1o pilar
    do{ // 2o pilar
        console.log(i);
        i++ // 3o pilar
    }while(i<50)
}

function exemploDoWhile(){
    let idade
    do{
        idade = Number(prompt("Digite sua idade:"))
        if(idade<18){
            alert("Idade errada, te liga")
            alert("Digite direito!")
        } 
    }while(idade < 18)

    alert("Você entrou no sistema")
}
function exemploDoWhileLimitado(){
    let idade
    let tentativas = 3
    do{
        idade = Number(prompt("Digite sua idade: \nVocê tem " + tentativas + " tentativas"))
        tentativas--
        console.log(tentativas);

    }while(idade < 18 && tentativas>0)

    alert("Você entrou no sistema")
}

