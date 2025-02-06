const navbarHTML=
` <header class="section-navbar">
    <section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free Shiping, 30 day return or refund guarantee</p>
        </div>
        

      <!-- Sign In and Sign Up section (Visible initially) -->
          <div class="sign_in_up" id="loginDiv" >
            <a href="login.html">SIGN IN/</a>
            <a href="register.html">SIGN UP</a>
          </div>

  <!-- Name and Logout section (Visible after login) -->
          <div class="sign_in_up" id="logoutDiv" style="display:none;">
            <a href="#" id="name"></a> 
            <button class="add-to-cart-button" onclick="logout()" >LOG OUT</button>
          </div>

          

      </div>
    </section>
    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img src="./image/logo.png" 
          alt="logo of brand"
          class="logo"
          width="80%"
          height="auto">
        </a>
      </div>
      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">about</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">products</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">contact</a>
          </li>
          <li class="nav-item" >
            <a href="myOrder.html" class="nav-link" id="myOrder" style="display: none;">MyOrder</a>
          </li>
          <li class="nav-item">
            <a href="addToCart.html" class="nav-link add-to-cart-button" id="cartValue">
              <i class="fa-solid fa-cart-shopping"> 0 </i>
            </a>
          </li>
          

        </ul>

      </nav>
    </div>

  </header>
`;

const navbarElem=document.querySelector(".section-navbar");
navbarElem.insertAdjacentHTML("afterbegin",navbarHTML);