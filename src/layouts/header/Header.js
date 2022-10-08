import Avatar from "../../components/Avatar";
import ProfileIcon from "./ProfileIcon";
import logoWithwhiteBg from "../../images/Screen Shot 2565-10-08 at 13.37.35.png";
import home from "../../images/ecommerce-icon-home-icon-market-icon-png-favpng-Sbm1PB6dTK5XMGEKHDNzNWkSQ.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary">
      <div className="container-fluid mx-1  d-flex justify-content-between">
        <Link to="/landing">
          <Avatar src={logoWithwhiteBg} size="60" />
        </Link>
        <Link to="/">
          <Avatar src={home} size="60" />
        </Link>

        <ProfileIcon />
      </div>
    </nav>
  );
}

export default Header;
