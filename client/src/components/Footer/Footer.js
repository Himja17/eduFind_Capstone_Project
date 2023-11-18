import "./Footer.scss";
import logo from "../../assets/Logo/eduFind_logo.jpg";
import { Link } from "react-router-dom";
import facebook_icon from "../../assets/Icons/facebook_icon.png";
import insta_icon from "../../assets/Icons/instagram_icon.png";
import twitter_icon from "../../assets/Icons/twitter_icon.png";

function Footer() {
  return (
    <div className="footer__main">
      <div className="footer__sub-container">
        <div className="footer__links">
          <Link className="footer__links--para" to="/contact">
            <p>Contact Us</p>
          </Link>
          {/* <Link className="footer__links--para">
            <p>About Us</p>
          </Link> */}
        </div>

        <div className="footer__icons-container">
          <a href="https://www.facebook.com/">
            <img
              src={facebook_icon}
              alt="facebook icon"
              className="footer__icons"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={insta_icon}
              alt="instagram icon"
              className="footer__icons"
            />
          </a>
          <a href="https://www.twitter.com/">
            <img
              src={twitter_icon}
              alt="twitter icon"
              className="footer__icons"
            />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; eduFind Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
