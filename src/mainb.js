import "./main.css";
import greek from "./Gr.webp"
import motorbike from "./motorbike.png"
import Bruschetta from "./Br.jpg"
import lemon from "./lemon.jpg"
import React from "react";


function Mainb() {
    return (
        <div class="cont"> 
    <div class="mc">
<img src={greek} class="g"></img>
<b>
<p class="name">Greek salad</p><p class="price">$12.99</p></b>
<p class="pa">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
   <p class="d">Order a delivery <img src={motorbike} class="i"></img></p>
   </div>
   <div class="mc"><img src={Bruschetta} class="g"></img>
<b>
<p class="name">Bruschetta</p><p class="price">$5.99</p></b>
<p class="pa">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
   <p class="d">Order a delivery <img src={motorbike} class="i"></img></p></div>
   <div class="mc"><img src={lemon} class="g"></img>
<b>
<p class="name">Lemon Dessert</p><p class="price">$4.99</p></b>
<p class="pa">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
   <p class="d">Order a delivery <img src={motorbike} class="i"></img></p></div>

    </div>
    );
  };
  export default Mainb;