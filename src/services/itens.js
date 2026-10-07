//Mapeando ações que itens podem fazer 

async function createIten(name, price, quantity) {
    
    return { name, price, quantity, subTotal: () => price * quantity,};

}

export default createIten