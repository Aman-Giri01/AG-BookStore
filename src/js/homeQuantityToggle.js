export const homeQuantityToggle=(event,id,products)=>{

    const product = products.find((prod) => prod.id === id);


    const currentCardElement=document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    const productQuantity=currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity)

    let quantity=parseInt(productQuantity.getAttribute('data-quantity'))|| 1;

    

   console.log(`Initial stock: ${product.stock},quantity: ${quantity}`);

    if(event.target.className==="cartIncrement")
    {
        if((quantity)<(product.stock*50)){
            quantity+=1;
            product.stock-=1;
            
        }
       
        else if(quantity===product.stock){
          quantity=product.stock;
         
         
        }
    }
    if(event.target.className==="cartDecrement")
    {
        if(quantity>1){
            quantity-=1;
            product.stock+=1;
            
        }else {
            quantity = 1;         // Ensure quantity doesn't go below 1
        }
    }


    
    // console.log(`updated stock: ${updatedStock},quantity: ${quantity}`);
    productQuantity.innerText=quantity;
    productQuantity.setAttribute('data-quantity',quantity.toString());

    


    currentCardElement.querySelector(".productStock").textContent = product.stock;


    return quantity;

};