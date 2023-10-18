import logo from "./logo.svg";
import './header.css';

function Header() {
    return (
    <>
    <header>
    
<img src={logo} className="logo"></img>
    </header>
    </>
    );
  }
  export default Header;