//monitorando funcionalidades do carrinho de compras .


//adicionar itens.
async function addItens(userKart, itens) {
    
    return userKart.push(itens);
};
//Deletar itens
async function deleteIten(userKart, name ) {
console.log(`${name} deletado do carrinho de compras`);
 const index =   userKart.findIndex((iten) => iten.name === name);
 if (index !== -1){
    userKart.splice(index, 1);
 }

};
//remover itens
async function removeIten(userKart, iten) {


 const indexAtual = userKart.findIndex((i) => i.name === iten.name);
 if(indexAtual === -1){
    console.log("Item não encontrado no carrinho de compras");
    return
 };
 if(userKart[indexAtual].quantity > 1){
    userKart[indexAtual].quantity -= 1;
console.log(`${iten.name} removido do seu carrinho de compras. Quantidade atual: ${userKart[indexAtual].quantity}`);
    return 
};
if(userKart[indexAtual].quantity === 1){
    userKart.splice(indexAtual, 1);
    console.log(`${iten.name} removido do seu carrinho de compras.`);
    return
}
}
//calcular total
async function calculateKart(userKart) {
 
 const preco =  userKart.reduce((atual, atualIten) =>  atual + atualIten.subTotal(),0); 
 console.log("\n______________________________________________\n")
 console.log(`Total do carrinho de compras: R$ ${preco.toFixed(2)}\n`);
 
};

async function displayKart(userKart) {
    console.log("############ Carrinho de compras #############!\n");
    userKart.forEach((iten, index) => {
        console.log("______________________________________________\n")
        console.log(`${index + 1}- ${iten.name}: R$ ${iten.price.toFixed(2)} x ${iten.quantity} = R$ ${iten.subTotal().toFixed(2)}`);
    });
}

export {
    addItens,
    deleteIten,
    removeIten,
    calculateKart,
    displayKart,
}