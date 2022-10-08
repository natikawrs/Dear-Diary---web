import { Outlet } from "react-router-dom";
import Container from "../container/Container";
import FooterLayout from "../FooterLayout";
import Header from "../header/Header";

function AuthLayout() {
  return (
    <div className="bg-warning">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <FooterLayout />
    </div>
  );
}

export default AuthLayout;
