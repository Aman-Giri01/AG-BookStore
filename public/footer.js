const footerHTML=
`
 <footer class="section-footer">
    <div class="footer-container container" >
      <div class="content_1">
        <img src="./image/logo.png" alt="logo of company">
        <p>
          Welcome to AG Store, Discover the world of Books.
        </p>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-whatsapp"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-solid fa-phone"></i>
      </div>
      <div class="content_2">
        <h4>COLLECTIONS</h4>
        <a href="#">New Arrivals</a>
        <a href="#">Bestsellers</a>
        <a href="#">Fiction </a>
        <a href="#">Children's Book</a>
      </div>
      <div class="content_3">
        <h4>EXPERIENCE</h4>
        <a href="./contact.html">Contact us</a>
        <a href="" target="_blank">Payment Method</a>
        <a href="" target="_blank">Delivery</a>
        <a href="" target="_blank">Return and Exchange</a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>Be the first to know about new <br> book releases, sales and exclusiveoffers!</p>
        <div class="fmail">
          <input type="email" placeholder="Your Email">
          <i class="bx bx-envelope"></i>
        </div>
        <hr>
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and code by Aman Giri</p>
      </div>
    </div>
   </footer>
`;

const footerElem=document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin",footerHTML);