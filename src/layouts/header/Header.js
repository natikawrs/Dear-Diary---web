import Avatar from "../../components/Avatar";
import ProfileIcon from "./ProfileIcon";
import home from "../../images/ecommerce-icon-home-icon-market-icon-png-favpng-Sbm1PB6dTK5XMGEKHDNzNWkSQ.jpeg";
import { Link } from "react-router-dom";
import fullLogo from "../../images/full-Dear-Diary-Secondary-Logo-PNG.webp";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const {
    user: { userName }
  } = useAuth();
  return (
    <nav className="navbar navbar-expand-sm bg-secondary">
      <div className="container-fluid mx-1  d-flex justify-content-between px-5">
        <Link to="/landing">
          <img src={fullLogo} alt="full logo" width="120" height="50" />
        </Link>
        <Link to="/">
          <Avatar src={home} size="60" />
        </Link>
        <div className="navbar-nav d-flex gap-3">
          <span className="text-primary d-flex align-items-center">
            {` Hello, ${userName}`}
          </span>
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}

export default Header;
