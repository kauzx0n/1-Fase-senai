// infos
let salarioMensal, diasTrabalhados
let diaria, semanal
// leituras
 salarioMensal = Number(prompt("Qual salario mensal de junin ?"))
diasTrabalhados = Number(prompt("Quantos dias junin trabalha ?"))
// proc
diaria = salarioMensal / diasTrabalhados
alert("O junin por dia recebe R$ " + diaria)
semanal = diaria *5
// saidas
alert("Junin recebe por semana o total de R$ " + semanal )
