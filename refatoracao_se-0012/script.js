let resposta = document.getElementById("resultado")
function teletrans(){
    let frete, peso, distancia, volume
    peso = Number(prompt("Peso(KG):"))
    distancia = Number(prompt("Distancia(KM):"))
    volume = Number(prompt("Volume(M3):"))
    frete = 15 +(2*peso) + (0.05*distancia) + (10*volume)
    if(peso > 0 && distancia> 0 && volume >0){
        document.getElementById("resultado").innerHTML = "O total do frete vai ser de R$" +frete.toFixed(2)
    }else{
        document.getElementById("resultado").innerHTML = "Alguns dos valores digitados são menor ou igual a zero, por favor tente novamente"
    }
}



function donabete(){
    let fatu_bruto, premiacoes, gastos, comissoes, lucro,meta_lucro, faltou
    meta_lucro = Number(prompt("Meta de lucro: R$"))
    fatu_bruto = Number(prompt("Faturamento bruto:"))
    premiacoes = Number(prompt("Premiações: "))
    gastos = Number(prompt("gastos em presentes:"))
    comissoes = Number(prompt("Comissões:"))
    lucro = fatu_bruto - premiacoes - gastos - comissoes
    if(lucro >= meta_lucro){ 
        document.getElementById("resultado").innerHTML = "Você atingiu a meta de lucro. Lucro esperado: R$" + lucro.toFixed(2)
    }else{
        faltou = meta_lucro - lucro
        document.getElementById("resultado").innerHTML = "Infelizmente você não atingiu a meta de lucro, faltou R$" + faltou.toFixed(2)
    }
}

function pepequeno(){
    let preco, quantidade, total
    preco = prompt("Preço por cada par de calçado: R$")
    preco = Number(preco)
    quantidade = prompt("Quantidade de pares trocados:")
    quantidade = Number(quantidade)
    if(quantidade>100){
        document.getElementById("resultado").innerHTML = "Entre em contato com o fabricante"
    }else if(preco >0 && quantidade >0){
        total = preco *quantidade
        document.getElementById("resultado").innerHTML = "A loja vai receber R$" + total.toFixed(2) + " em vale trocas"
        console.log("Valor a receber: R$" + total.toFixed(2))
    }
    //botando 2 decimais: tofixed(2)
}

function guilherme_portoes(){
    //exercicio 03 - guilherme portoes
    let clt, estagiarios, pj,totaldevs,total
    clt = Number(prompt("Devs CLTs:"))
    estagiarios = Number(prompt("Devs estagiarios:"))
    pj = Number(prompt("Devs PJ:"))
    totaldevs = clt + estagiarios + pj
    total = totaldevs /2 
    if(clt > total){
        resposta.innerHTML = "Mais de metade dos Devs contratados são CLTs"
    }else{
        resposta.innerHTML = "Menos de metade dos Devs contratados são CLTs"
    }
    resposta.innerHTML += "<br>O total de devs na empresa é de " + totaldevs
}

function Trajeto_Pomar(){
    let inicial, final, vendidas
    inicial = Number(prompt("Quantidade inicial de laranjas:"))
    final = Number(prompt("Quantidade final de laranjas: "))
    vendidas = inicial - final
    if(final <=0){
        resposta.innerHTML = "Você vendeu " + vendidas + " laranjas"
        resposta.innerHTML += "<br>AVISO: O estoque deve ser maior amanhã"
    }else{
        resposta.innerHTML = "Você vendeu um total de " + vendidas + " laranjas"
    }
}

function kowalski(){
    let relatorio_pf, relatorio_pj, tempo_pf,tempo_pj, valor_total_pf,relatorio, valor_total_pj,qtd_total_relatorios,tempo_total_trabalhado, valor_total_recebido, media_valor_relatorio_pf, media_valor_relatorio_pj
    let mediatempogasto_pf, mediatempogasto_pj
    relatorio_pf = Number(prompt("Relatorios PF:"))
    relatorio_pj = Number(prompt("Relatórios PJ:"))
    tempo_pf = Number(prompt("Tempo para elaborar relatórios PF:"))
    tempo_pj = Number(prompt("Tempo para elaborar relatórios PJ:"))
    valor_total_pf = Number(prompt("Valor recebido relatorios PF:"))
    valor_total_pj = Number(prompt("Valor recebido relatorios PJ:"))
    qtd_total_relatorios = relatorio_pf + relatorio_pj
    tempo_total_trabalhado = tempo_pf + tempo_pj
    valor_total_recebido = valor_total_pf + valor_total_pj
    media_valor_relatorio_pf = valor_total_pf /relatorio_pf
    media_valor_relatorio_pj = valor_total_pj / relatorio_pj
    mediatempogasto_pf = tempo_pf / relatorio_pf
    mediatempogasto_pj = tempo_pj / relatorio_pj
    relatorio = "Parabéns pelo seu trabalho"
    if(media_valor_relatorio_pf > media_valor_relatorio_pj && relatorio_pf > relatorio_pj){
        relatorio = "Parabéns! você está investindo nos relatórios PF que estão tendo mais retorno!"
    }else if(media_valor_relatorio_pj > media_valor_relatorio_pf && relatorio_pj > relatorio_pf){
        relatorio = "Você está investindo seu tempo nos relatórios pj que estão tendo mais retorno, parabéns!"
    }
    resposta.innerHTML = "Quantidade total de relatorios: " +qtd_total_relatorios
    resposta.innerHTML += "<br>Tempo total trabalhado: " + tempo_total_trabalhado
    resposta.innerHTML += "<br>Valor total recebido: " + valor_total_recebido
    resposta.innerHTML +="<br>Média de valor recebido por relatórios PF: " + media_valor_relatorio_pf.toFixed(2)
    resposta.innerHTML +="<br>Média de valor recebido por relatórios PJ: " + media_valor_relatorio_pj.toFixed(2)
    resposta.innerHTML +="<br>Média tempo gasto por relatórios PF:" + mediatempogasto_pf.toFixed(2)
    resposta.innerHTML +="<br>Média tempo gasto relatórios PJ:" + mediatempogasto_pj.toFixed(2)
    resposta.innerHTML += "<br><br><strong>Conclusão: " + relatorio
}

function Pe_ernan(){
    let custos, doacoes, pagamento
    custos = Number(prompt("Custos da igreja:"))
    doacoes = Number(prompt("Doações recebidas(dia):"))
    pagamento = custos - doacoes
    if(pagamento>0){
        resposta.innerHTML = "Faltam R$" + pagamento + " para pagar os custos"
        resposta.innerHTML += "<br>A meta não foi atingida. As pessoas podem contribuir mais "
    }else if(pagamento <=0){
        resposta.innerHTML = "<br>A meta foi atingida"
    }

}
function capitao_ganso(){
    let gasto, faturamento_ingressos, faturamento_venda,lucro, lucro_percentual
    gasto = Number(prompt("Gasto com suprimentos/mercadorias:"))
    faturamento_ingressos = Number(prompt("Faturamento em venda de ingressos:"))
    faturamento_venda = Number(prompt("Faturamento em venda de itens:"))
    lucro = faturamento_ingressos + faturamento_venda - gasto
    lucro_percentual = (lucro/gasto) *100
    resposta.innerHTML = "O seu lucro total foi de " + lucro
    resposta.innerHTML +="<br>Seu lucro percentual foi de " + lucro_percentual.toFixed(2) + "%"
    if(faturamento_ingressos > faturamento_venda){
        resposta.innerHTML += "<br>Você fatura mais com vendas de ingresso"
    }else if(faturamento_venda> faturamento_ingressos){ 
        resposta.innerHTML += "<br>Você fatura mais com venda de itens"
    }else if(faturamento_ingressos == faturamento_venda){
        resposta.innerHTML += "<br>O faturamento de ingresso e o faturamento em venda de itens são iguais"
    }
}
function Junin(){
    let salario, dias,totaldia, semanal, freela,mensal, porcentagem
    salario = Number(prompt("Salário:"))
    dias = Number(prompt("Dias trabalhados"))
    freela = Number(prompt("Total ganho com bicos: R$"))
    totaldia = salario/dias
    semanal = totaldia *5
    mensal = semanal * 4
    mensal = mensal + freela
    porcentagem = (freela/mensal) * 100
    resposta.innerHTML ="<br>Você recebe R$" + totaldia.toFixed(2) + " por dia"
    resposta.innerHTML +="<br>Salário semanal: R$" + semanal.toFixed(2)
    resposta.innerHTML +="<br>" + porcentagem + "% da sua renda vem de bicos"
}

function peba(){
    let vitorias, empates,aproveitamento, jogos
    let pontos
    jogos = Number(prompt("Numero de jogos"))
    vitorias = prompt ("Vitórias:")
    vitorias = Number(vitorias)
    empates = prompt ("Empates:")
    empates = Number(empates)
    vitorias = vitorias * 3
    pontos = vitorias + empates
    aproveitamento = pontos / (jogos*3) * 100
    if(aproveitamento>70){
        resposta.innerHTML = "Parabéns! Você está concorrendo ao titulo do campeonato!"
    }
    resposta.innerHTML += "<br>O total de pontos do seu time no campeonato foi de " + pontos
    resposta.innerHTML += "<br>Seu aproveitamento foi de " + aproveitamento.toFixed(2) + "%"
} 
function gael(){
    let caminhao_jare, preco_caminhao, jare, faturamento, custo, lucro, mensagem,quantidade_jare, passada
    passada = Number(prompt("Caminhões de jarés vendidos nas temp passada:"))
    caminhao_jare = Number(prompt("Quantidade de caminhoes vendidos nessa temporada:"))
    preco_caminhao = 450
    jare = 90
    quantidade_jare = caminhao_jare * 50
    faturamento = quantidade_jare * 90
    custo = preco_caminhao * caminhao_jare
    lucro = faturamento - custo
    if(passada > caminhao_jare){
        mensagem = "Na temporada passada foram vendidos mais jarés"
    }else if(caminhao_jare >passada){
        mensagem = "Nessa temporada você vendeu mais jarés do que na temporada anterior"
    }else{
        mensagem = "Você vendeu a mesma quantidade de jarés que na temp passada"
    }
    resposta.innerHTML = "Jarés vendidos: " + quantidade_jare
    resposta.innerHTML += "<br>Faturamento: R$" + faturamento
    resposta.innerHTML += "<br>custo: R$" + custo
    resposta.innerHTML += "<br>Lucro: R$" + lucro
    resposta.innerHTML += "<br>" +mensagem
}
function telebala(){
    let peso, tara, carga,limite_liquido, limite_pesobruto,liquido,mensagem
    mensagem = ""
    limite_liquido = Number(prompt("Limite do peso liquido:"))
    limite_pesobruto = Number(prompt("Limite de peso bruto:"))
    liquido = Number(prompt("Peso liquido:"))
    peso = Number(prompt("Peso bruto:"))
    tara = Number(prompt("Tara(KG):"))
    carga = peso - tara
    if (liquido > limite_liquido && peso > limite_pesobruto){ 
        mensagem = "AVISO: Peso bruto e peso liquido ultrapassados"
    }else if(liquido > limite_liquido){
        mensagem = "Peso liquido ultrapassado"
    }else if(peso > limite_pesobruto){
        mensagem = "Peso Bruto ultrapassado"
    }
    resposta.innerHTML = mensagem
    resposta.innerHTML += "<br>A carga é de " + carga + "KG"
}