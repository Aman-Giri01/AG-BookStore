 export const fetchQuantityFromOrder=(id,price)=>{
    let cartProducts = localStorage.getItem("order");
        if (!cartProducts) {
            alert("No products in the cart.");
        } else {
            try {
                cartProducts = JSON.parse(cartProducts);
            } catch (error) {
                alert("Error parsing products from localStorage.");
                console.error(error);
                cartProducts = [];
            }
        }


    let existingProduct=cartProducts.find((curProd)=>curProd.id===id);
    let quantity=1;

    if(existingProduct)
    {
        quantity=existingProduct.quantity;
        price=existingProduct.price;
    }
    return {quantity,price};
};