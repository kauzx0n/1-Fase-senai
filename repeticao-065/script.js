//LÓGICA DO MENU
function mudarAba(idDaParte, idDoBotao) {
//Esconde todas as partes
  document.getElementById('parte1').style.display = 'none';
  document.getElementById('parte2').style.display = 'none';
  document.getElementById('parte3').style.display = 'none';
  document.getElementById('parte4').style.display = 'none';

  // 2. Tira a cor azul (active) de todos os botões do menu
  document.getElementById('btn-p1').classList.remove('active');
  document.getElementById('btn-p2').classList.remove('active');
  document.getElementById('btn-p3').classList.remove('active');
  document.getElementById('btn-p4').classList.remove('active');

//Mostra só a parte que foi clicada e pinta o botão correspondente de azul
  document.getElementById(idDaParte).style.display = 'block';
  document.getElementById(idDoBotao).classList.add('active');
}

//EXERCÍCIOS

function quadrado() {
    let contador = 0;
    while(contador < 10) {
        contador++;
        let quadrado = contador * contador;
        alert(contador + "² = " + quadrado);
    }
}

function decrescente() {
    let contador = 10;
    while(contador > 0) {
        alert(contador);
        contador = contador - 1;
    }
}

function soma() {
    let total = 0;
    let contador = 0;
    while(contador < 100) {
        contador++;
        total = total + contador;
    }
    alert(total);
}

function tabuada() {
    let total = 0;
    let contador = 0;
    while(contador < 10) {
        contador++;
        let tabuad = 5 * contador;
        alert("5x" + contador + "=" + tabuad);
    }
}

function tabuadaUsuario() {
    let tabuad = Number(prompt("Digite o numero da tabuada: "));
    let resultado = 0;
    let contador = 0;
    while(contador < tabuad) {
        contador++;
        resultado = tabuad * contador;
        alert(tabuad + "X" + contador + "=" + resultado);
    }
}

function numeroImpar() {
    let contador = 0;
    while(contador < 20) {
       contador++;
       if(contador % 2 != 0) {
           alert(contador);
       }
    }
}

function fatorial() {
    let numero = Number(prompt("Digite um número para ver o fatorial: "));
    let resultado = 1;
    let contador = numero;

    while(contador > 0) {
        resultado = resultado * contador;
        contador = contador - 1;
    }
    alert("O fatorial de " + numero + " é: " + resultado);
}

function n1a100() {
    let contador = 0;
    while(contador < 100) {
        contador++;
        if(contador % 3 == 0 && contador % 5 == 0) {
            alert("FizzBuzz");
        } else if(contador % 3 == 0) {
            alert("Fizz");
        } else if(contador % 5 == 0) {
            alert("Buzz");
        } else {
            alert(contador);
        }
    }
}

function calculaSerie() {
    let contador = 0;
    let total = 0;
    while(contador < 10) {
        contador++;
        total = total + (1 / contador);
    }
    alert("O valor da série é: " + total);
}

function contaParesImpares() {
    let limite = Number(prompt("Digite o número limite: "));
    let contador = 0;
    let pares = 0;
    let impares = 0;

    while(contador < limite) {
        contador++;
        if(contador % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    alert("Pares: " + pares + " | Ímpares: " + impares);
}

function maiorMenor() {
    let lista = [15, 8, 90, 3, 42, 1]; 
    let contador = 1; 
    let maior = lista[0];
    let menor = lista[0];

    while(contador < lista.length) {
        if(lista[contador] > maior) {
            maior = lista[contador];
        }
        if(lista[contador] < menor) {
            menor = lista[contador];
        }
        contador++;
    }
    alert("Maior número: " + maior + "\nMenor número: " + menor);
}

function mediaDaLista() {
    let lista = [10, 5, 8, 20, 7]; 
    let contador = 0;
    let soma = 0;

    while(contador < lista.length) {
        soma = soma + lista[contador];
        contador++;
    }  
    let media = soma / lista.length;
    alert("A media da lista é: " + media);
}

function verificaPrimo() {
    let numero = Number(prompt("Digite um número: "));
    let contador = 1;
    let quantidadeDivisores = 0;

    while(contador <= numero) {
        if(numero % contador == 0) {
            quantidadeDivisores++;
        }
        contador++;
    }

    if(quantidadeDivisores == 2) {
        alert("O número " + numero + " é primo");
    } else {
        alert("O número " + numero + " nao é primo.");
    }
}

function primosAte50() {
    let numeroAtual = 1;
    let listaDePrimos = "";

    while(numeroAtual <= 50) {
        let contador = 1;
        let quantidadeDivisores = 0;

        while(contador <= numeroAtual) {
            if(numeroAtual % contador == 0) {
                quantidadeDivisores++;
            }
            contador++;
        }

        if(quantidadeDivisores == 2) {
            listaDePrimos = listaDePrimos + numeroAtual + "  "; 
        }
        numeroAtual++;
    }
    alert("Os números primos de 1 a 50 são: \n" + listaDePrimos);

//🐱‍🏍Aclamação repetida Peça ao usuário para digitar uma palavra e repita essa palavra 10 vezes na tela.

function  

}