import { getCartProductFromLS } from "./getCartProducts";
export const updateCartProductTotal=()=>{

    let productSubTotal=document.querySelector(".productSubTotal");
    let productFinalTotal=document.querySelector(".productFinalTotal");
    let productTax=document.querySelector(".productTax");
    let initialValue=0;
    let localCartProducts=getCartProductFromLS();
    let totalProductPrice=localCartProducts.reduce((accum,curElem)=>{
        let productPrice=parseInt(curElem.price) || 0;
        return accum+productPrice;
    },initialValue);
    // console.log(totalProductPrice);



    productSubTotal.textContent=`₹${(totalProductPrice).toFixed(2)}`;
    productTax.textContent=`₹${(totalProductPrice * 0.18).toFixed(2)}` ;
    productFinalTotal.textContent=`₹${(totalProductPrice +(totalProductPrice * 0.18)).toFixed(2)}` ;

    

   



};