import "./Header.scss";
import logo from "../../assets/Logo/eduFind_logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__main">
      <Link to="/">
        <img src={logo} alt="eduFind logo" className="header__logo" />
      </Link>
      <div className="header__links">
        <Link to="/explore" className="header__categories-link">
          <div className="header__eachlink">Home</div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
