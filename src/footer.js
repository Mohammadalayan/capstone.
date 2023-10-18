import logo from "./logo.svg";
import './footer.css';

function Footer() {
    return (
        <div className="fo">
            <img src={logo} alt="logo" class="lo"></img>
            <div class="co">
                <h2>Doormat Navigation</h2>
                <p class="in">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Reservations</a>
                    <a href="#">Order Online</a>
                    <a href="#">Login</a>
                </p>
            
                <h2>Contact</h2>
                <p class="in">
                    <a href="#">Address</a>
                    <a href="#">Phone number</a>
                    <a href="#">Email</a>
                </p>
                <h2>Social Media Links</h2>
                <p class="in">
                    <a href="#">Address</a>
                    <a href="#">Phone number</a>
                    <a href="#">Email</a>
                </p></div>
            </div>
    );
}
export default Footer;
