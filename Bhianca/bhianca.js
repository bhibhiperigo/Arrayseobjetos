let inventario = [
    { nome: 'Iphone 11', preco: R$1000, emEstoque: true },
    { nome: 'Iphone 12', preco: 1.500, emEstoque: true },
    { nome: 'Iphone 13', preco: 2000, emEstoque: true },
    { nome: 'Iphone 14', preco: 2.500, emEstoque: false },
    { nome: 'iphone 15', preco: 3000, emEstoque: true },
    { nome: 'Iphone 16', preco: 3.500, emEstoque: true },
    { nome: 'Samsung S20', preco: 2000, emEstoque: true },
    { nome: 'Samsung S21', preco: 2.550, emEstoque: true },
    { nome: 'Samsung S22', preco: 3000, emEstoque: true },
    { nome: 'Samsung S23', preco: 3.500, emEstoque: false },
    { nome: 'Samsung s24', preco: 4000, emEstoque: true },
    { nome: 'Tablet Nokia', preco: 800, emEstoque: false },
    { nome: 'Ipad 8', preco:2.500, emEstoque: false },
    { nome: 'Samsung Tablet', preco: 2000, emEstoque: true },
    { nome: 'Fone zz flip 6000', preco: 600, emEstoque: false },
];

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);