import r from "./r.jpg";
import './main.css';
import { Link} from "react-router-dom";


function Main() {
  let des =
    "Restaurant aims to provide a satisfying culinary experience for its customers, combining delicious food, quality service, and an inviting atmosphere to create a memorable dining experience.";

  return (
    <div className="m">
     <span className="span"> <h1>Little Lemon</h1></span>
      <h2>Chicago</h2>
      <p className="fob">{des}</p>
      <Link to="/reserve">
        <button className="b">    
          Reserve a Table
        </button>
      </Link>
      <img src={r} className="ma" alt="." />
    </div>
  );
};
export default Main;