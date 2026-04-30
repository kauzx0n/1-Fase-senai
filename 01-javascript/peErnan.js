// infos
let custoMensal, doacoes
let faltaMensal, descontoMensal
// leituras
custoMensal = Number(prompt("Total do aluguel da igreja ?"))
doacoes = Number(prompt("Qual foi o total de doaçoes para a igreja ?"))
// proc
descontoMensal = custoMensal - doacoes
// saidas
console.log("preço total a pagar com os descontos: " + descontoMensal)
