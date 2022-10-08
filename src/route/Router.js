import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import AuthLayout from "../layouts/auth/AuthLayout";
import { useAuth } from "../contexts/AuthContext";
import UpdatePost from "../pages/UpdatePost";
import LandingPage from "../pages/LandingPage";
import NavLayout from "../layouts/NavLayout";

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/post/" element={<Post />} />
          <Route path="/post/:id" element={<UpdatePost />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<NavLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </>
      )}
    </Routes>
  );
}
export default Router;
