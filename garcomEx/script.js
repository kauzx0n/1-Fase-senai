function garçom(){
    let salario = Number(document.getElementById("salario").value.trim())
    let emprestimo = Number(document.getElementById("emprestimo").value.trim())
    let num_pres = Number(document.getElementById("num_pres").value.trim())
    let valor_presta = emprestimo/ num_pres
    let limite = salario*0.3
    let taxa = 0.02
    let final = emprestimo *(1 +taxa)
    if(valor_presta <= limite && valor_presta >0 && salario >0 && emprestimo >0 && num_pres >0){
        document.getElementById("resultado").innerHTML = "O emprestimo pode ser concedido"
    }else if(valor_presta<=0 || salario <=0 || emprestimo<=0){
        document.getElementById("resultado").innerHTML = "Por favor, digite novamente"
    }else if(valor_presta > limite){
        document.getElementById("resultado").innerHTML = "O emprestimo não pode ser concedido"
    }
}