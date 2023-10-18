import "./main.css";
import greek from "./greek.jpg"
import motorbike from "./motorbike.png"
import Bruschetta from "./Bruschetta.jpg"
import lemon from "./lemon.jpg"

function Mainb() {
    return (
        <div class="cont"> 
    <div class="mc">
<img src={greek} class="g"></img>
<b>
<p class="name">Greek salad</p><p class="price">$12.99</p></b>
<p class="pa">The famous greek salad of crispy <br></br>lettuce, peppers, olives and our Chicago<br></br> style feta cheese, garnished with crunchy <br></br>garlic and rosemary croutons. </p>
   <p class="d">Order a delivery <img src={motorbike} class="i"></img></p></div>
   <div class="mc"><img src={Bruschetta} class="g"></img>
<b>
<p class="name">Bruschetta</p><p class="price">$12.99</p></b>
<p class="pa">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
   <p class="d">Order a delivery <img src={motorbike} class="i"></img></p></div>
   <div class="mc"><img src={lemon} class="g"></img>
<b>
<p class="name">Greek salad</p><p class="price">$12.99</p></b>
<p class="pa">The famous greek salad of crispy <br></br>lettuce, peppers, olives and our Chicago<br></br> style feta cheese, garnished with crunchy <br></br>garlic and rosemary croutons. </p>
   <p class="d">Order a delivery <img src={motorbike} class="i"></img></p></div>

    </div>
    );
  };
  export default Mainb;