let nome = prompt("Nome do Produto: ");
let categoria = prompt("Categoria do Produto: ");
let preco = prompt("Preço do Produto: ");
let quantidade = prompt("Quantidade em Estoque: ");

let textoEstoque = "";

if(quantidade < 10){
    textoEstoque = "Estoque Baixo";
}else{
    textoEstoque = "Estoque Adequado";
}

alert(`Nome do Produto: ${nome} \nCategoria do Produto: ${categoria}\n` +
    `Preço do Produto: R$${preco} \nEstoque: ${textoEstoque}`);