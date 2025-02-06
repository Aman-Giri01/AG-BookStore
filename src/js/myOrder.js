import products from "../../api/products.json";
import { fetchQuantityFromOrder} from "./fetchQuantityFromOrder";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

document.addEventListener("DOMContentLoaded", () => {
let cartProducts = localStorage.getItem("order");
if (!cartProducts) {
    alert("No products in MyOrder.");
} else {
    try {
        cartProducts = JSON.parse(cartProducts);
    } catch (error) {
        alert("Error parsing products from localStorage.");
        console.error(error);
        cartProducts = [];
    }
}

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});
// console.log(filterProducts);

const cartElement = document.querySelector('#productContainer');
const templateContainer = document.querySelector("#productTemplate");

const myOrder = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, price, stock,description } = curProd;
        // console.log(curProd);

        let productClone = document.importNode(templateContainer.content, true);
        const LSActualData = fetchQuantityFromOrder(id, price);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productStock").textContent = `${LSActualData.quantity} Pcs.`;
        productClone.querySelector(".productPrice").textContent = `Price: ₹${LSActualData.price}`;
        productClone.querySelector(".productDescription").textContent=description;

        productClone.querySelector(".add-to-cart-button").addEventListener("click", () => {
             cartProducts=cartProducts.filter((curProd)=>curProd.id!== id);
             localStorage.setItem("order",JSON.stringify(cartProducts));
             let removeDiv=document.getElementById(`card${id}`);
                if(removeDiv)
                {
                    removeDiv.remove();            
                    showToast("delete",id);
                }
        });

        cartElement.appendChild(productClone);
    });
    
     
 
   

};

myOrder();
updateCartValue(cartProducts);


});