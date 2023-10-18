import r from "./r.jpg";
import './main.css';

function Main() {
    return (
    <div class="m">

<h1>Little Lemon</h1>
<h2>Chicago</h2>
<p class="fob">{des}</p>
<button class="b">Reserve a Table</button>
    <img src={r} class="ma"></img>
    </div>
    );
  }
  let des="Restaurant aims to provide a satisfying culinary experience for its customers, combining delicious food, quality service, and an inviting atmosphere to create a memorable dining experience.";
  
  export default Main;