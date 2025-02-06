import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS=(id,price,stock)=>{
    let cartProducts=getCartProductFromLS();

    let existingProduct=cartProducts.find((curProd)=>curProd.id===id);
    let quantity=1;

    if(existingProduct)
    {
        quantity=existingProduct.quantity;
        price=existingProduct.price;
        stock=existingProduct.stock;
    }
    return {quantity,price};
};