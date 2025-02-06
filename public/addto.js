function isUserLoggedIn() {
    return localStorage.getItem("name") !== null;
  }
  
  document.getElementById("makePayment").onclick = function() {
    if (!isUserLoggedIn()) {
      window.location.href = "login.html";
    } else {
      const cartProducts = localStorage.getItem("cartProductLS");
  
      if (cartProducts) {
        localStorage.setItem("order", cartProducts);
        localStorage.removeItem("cartProductLS");
  
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.textContent = "Product is purchased Successfully. Your product will be delivered within 5 days.";
  
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.remove();
          window.location.reload();
        }, 2000);
      } else {
        alert("No products in the cart.");
      }
    }
  }
  