import logo from "../assets/Kasa.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
