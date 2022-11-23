var _homeContent = `<h1>HOME</h1>
<h2>Welcome to Cleaning CO.! Got a mess? We can clean it for you!</h2>
<div class="hero">
  <img src="images/hero.jpg" alt="" />
</div>
<div class="wrapper">
  <div class="promo-container">
    <section class="promo-holder">
      <div class="holder">
        <img src="images/holder1.jpg" alt="" />
        <div class="overlay">
          <div class="text">
            <h3>ABOUT US</h3>
          </div>
        </div>
      </div>
      <div class="holder">
        <img src="images/holder2.jpeg" alt="" />
        <div class="overlay">
          <div class="text">
            <h3>SERVICES</h3>
          </div>
        </div>
      </div>
      <div class="holder">
        <img src="images/holder3.jpg" alt="" />
        <div class="overlay">
          <div class="text">
            <h3>CONTACT US</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<h2>"IT'S MY GO TO CLEANING COMPANY!"</h2>`;
var _productsContent = `<h1>PRODUCTS</h1>
<section class="products">
  <h2>CHECK OUT THE LATEST SUPPLIES</h2>
  <div class="wrapper">
    <div class="products-info">
      <div class="productsImage">
        <img src="images/product1.jpg" alt="" />
      </div>
      <div class="aboutproducts">
        <p>
          The awesome 3in1 Window Washer. A great way to make window
          washing fun!
        </p>
      </div>
    </div>
    <div class="products-info">
      <div class="productsImage">
        <img src="images/product2.jpg" alt="" />
      </div>
      <div class="aboutproducts">
        <p>
          Our limited time Green Heart Sponge is back. Perfect to show
          some love to your home when cleaning!
        </p>
      </div>
    </div>
    <div class="products-info">
      <div class="productsImage">
        <img src="images/product3.jpg" alt="" />
      </div>
      <div class="aboutproducts">
        <p>Our Microfiber Cloth will leave your surfaces SPOTLESS!</p>
      </div>
    </div>
  </div>
</section>`;
var _photosContent = ` <h1>PHOTOS</h1>
<h2>Before & After</h2>
<section class="photos-area">
  <div class="photo-holder">
    <a href="images/b1.jpg" data-lightbox="b1" data-title="FirstSet">
      <img src="images/b1.jpg" alt="b1"
    /></a>
    <a href="images/b2.jpg" data-lightbox="b2" data-title="SecondSet"
      ><img src="images/b2.jpg" alt="b2"
    /></a>
    <a href="images/b3.jpg" data-lightbox="b3" data-title="ThirdSet"
      ><img src="images/b3.jpg" alt="b3"
    /></a>
    <a href="images/b4.jpg" data-lightbox="b4" data-title="FourthSet"
      ><img src="images/b4.jpg" alt="b4"
    /></a>
  </div>
  <div class="photo-holder">
    <a href="images/a1.jpg" data-lightbox="a1" data-title="FirstSet"
      ><img src="images/a1.jpg" alt="a1"
    /></a>
    <a href="images/a2.jpg" data-lightbox="a2" data-title="SecondSet"
      ><img src="images/a2.jpg" alt="a2"
    /></a>
    <a href="images/a3.jpg" data-lightbox="a3" data-title="ThirdSet"
      ><img src="images/a3.jpg" alt="a3"
    /></a>
    <a href="images/a4.jpg" data-lightbox="a4" data-title="FourthSet"
      ><img src="images/a4.jpg" alt="a4"
    /></a>
  </div>
</section>`;
var _bookingContent = `<h1>BOOKING</h1>
<section class="booking">
  <div class="container">
    <div class="title"><h2>Get a Quote</h2></div>
    <form>
      <input type="text" name="name" id="name" placeholder="Name" />
      <input type="text" name="email" id="email" placeholder="Email" />
      <input type="text" name="number" id="number" placeholder="Number" />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Address"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Message"
      ></textarea>
      <div class="learn-more">
        <a href="#">SUBMIT</a>
      </div>
    </form>
  </div>
</section>`;

export var fn = "Esme";

export function updateView (pageName){
    console.log("Model " + pageName);
    var pageContent = "_" + pageName;
    $("#app").html(eval(pageContent));
}
