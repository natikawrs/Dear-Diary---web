import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./container/Container";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import logoWithwhiteBg from "../images/Screen Shot 2565-10-08 at 13.37.35.png";
import FooterLayout from "./FooterLayout";

function NavLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid ps-5">
          <Link to="/landing">
            <Avatar src={logoWithwhiteBg} size="60" />
          </Link>
          <div
            className="collapse navbar-collapse d-flex justify-content-end gap-5 pe-5"
            id="navbarNavAltMarkup "
          >
            <div className="navbar-nav ">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
              <Link className="nav-link" to="#">
                FAQ
              </Link>
              <Link className="nav-link" to="#">
                Policy
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Container>
        <Outlet />
      </Container>
      <FooterLayout />
    </div>
  );
}

export default NavLayout;
