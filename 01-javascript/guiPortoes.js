// infos
let clts, pj, estagiarios
let total
// leituras
quantidadeClts = Number(prompt("Quantos Clts tem na empresa ?"))
quantidadesPj = Number(prompt("Quantos Pj tem na empresa ?"))
quantidadesEstg = Number(prompt("Quantos Estagiarios tem na empresa ?"))
// proc
total = quantidadeClts + quantidadesEstg + quantidadesPj
// saidas
console.log("O total de devs na equipe é de: " + total)