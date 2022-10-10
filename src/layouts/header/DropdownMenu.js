import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useAuth } from "../../contexts/AuthContext";

function DropdownMenu({ open, onClose }) {
  const {
    logout,
    user: { profileImage, userName, id }
  } = useAuth();
  return (
    <ul
      className={` bg-primary dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90${
        open ? " d-block" : ""
      }`}
    >
      <li>
        <Link
          to={`/profile/${id}`}
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg "
          onClick={onClose}
        >
          <Avatar src={profileImage} size="60" />

          <div className="d-flex flex-column">
            <span className="fw-bold text-secondary">{userName}</span>
            <small className="text-secondary">See your profile</small>
          </div>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1 bg-secondary" />
      </li>
      <li>
        <button
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={logout}
        >
          <i className="fas fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300 text-secondary" />
          <small className="text-secondary fw-bold ">Log Out</small>
        </button>
      </li>
      <li></li>
    </ul>
  );
}

export default DropdownMenu;
