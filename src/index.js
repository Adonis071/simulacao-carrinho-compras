const kart =[];
const myWishList = [];

import  createIten  from "./services/itens.js";
import * as services from "./services/kart.js";


//Criando meus itens 
const item1 = await createIten("arroz", 10, 5);
const item2 = await createIten("Feijão", 5, 3);
const iten3 = await createIten("Macarrão", 3, 5);

//Adicionando meus itens no meu carrinho de compras
await services.addItens(kart, item1);
await services.addItens(kart, item2);
await services.addItens(kart, iten3);
console.log("############ Carrinho de compras #############!\n");
await services.displayKart(kart);
await services.removeIten(kart, item2);
await services.removeIten(kart, item2);
await services.removeIten(kart, item2);
await services.displayKart(kart);
await services.calculateKart(kart);
//Deletando itens do meu carrinho de compras

// await services.displayKart(kart);
// await services.deleteIten(kart, item1.name);
// await services.deleteIten(kart, item2.name);


// //Calculando o total do carrinho de compras
// console.log(await services.calculateKart(kart));
