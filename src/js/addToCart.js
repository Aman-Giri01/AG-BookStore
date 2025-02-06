import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addToCart=(id)=>{
    let arrLocalStorageProduct=getCartProductFromLS();


    const currentProdElement=document.querySelector(`#card${id}`);
    
    let quantity=currentProdElement.querySelector(".productQuantity").innerText;
    let price=currentProdElement.querySelector(".productPrice").innerText;
    
    // console.log(quantity,price);

    price=price.replace("₹","");

    let existingProd= arrLocalStorageProduct.find((curProd)=>curProd.id===id);
    if(existingProd && quantity >1)
    {
        quantity=Number(existingProd.quantity) + Number(quantity);
        price=Number(price * quantity);
        
        let updateCart={id,quantity,price};
        updateCart=arrLocalStorageProduct.map((curProd)=>{
            // if(curProd.id===id)
            // {
            //     updateCart;
            // }
            // else{
            //     curProd;
            // }
            return curProd.id=== id?updateCart:curProd;

        });

        console.log(updateCart);
        localStorage.setItem("cartProductLS",JSON.stringify(updateCart));

        showToast("add",id);


    }
    
    if(existingProd){
        return false;
    }

    price=Number(price * quantity);
    quantity=Number(quantity);

    let updateCart={id,quantity,price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    showToast("add",id);
    
    

}