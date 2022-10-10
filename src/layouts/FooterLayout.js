import { Link } from "react-router-dom";
import fullLogo from "../images/full-Dear-Diary-Secondary-Logo-PNG.webp";

function FooterLayout() {
  return (
    <div className="row d-flex justify-content-evenly pt-5">
      <hr className="featurette-divider"></hr>
      <div className=" col-sm-6">
        <div className="">
          <div className="">
            <img src={fullLogo} alt="full logo" width="400" height="150" />
            <p className="card-text text-mute fs-5 text-secondary">
              Write what should not be forgotten.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-3  d-flex justify-content-between">
        <div className=" d-flex align-items-center text-secondary">
          <Link to="/landing" className=" btn-primary text-reset">
            Home
          </Link>
        </div>
        <div className=" d-flex align-items-center text-secondary">
          <Link to="#" className="btn-primary text-reset">
            Contact Us
          </Link>
        </div>
        <div className=" d-flex align-items-center text-secondary">
          <Link to="#" className=" btn-primary text-reset">
            FAQ
          </Link>
        </div>
        <div className=" d-flex align-items-center text-secondary">
          <Link to="#" className=" btn-primary text-reset">
            Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLayout;
