import logo from "../assets/LOGO-kasa-footer.png";
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
