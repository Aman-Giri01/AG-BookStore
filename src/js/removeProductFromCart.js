import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart=(id)=>{
    let cartProducts=getCartProductFromLS();
    cartProducts=cartProducts.filter((curProd)=>curProd.id!== id);

    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));


    // To remove div on click
    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv)
    {
        removeDiv.remove();

        // show toast when product added to cart

        // showToast("delete",id);
    }

    
   updateCartProductTotal();
   updateCartValue(cartProducts);

};