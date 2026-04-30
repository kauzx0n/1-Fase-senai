function calcularPrecoBrique(){
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS
    precoCompra = Number(prompt("Preço de compra:"))
    // PROCESSAMENTO
    precoVenda  = precoCompra * 3
    // SAIDAS
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda R$" + precoVenda.toFixed(2))
    
    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2);
}