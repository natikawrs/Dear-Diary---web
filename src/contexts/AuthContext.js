import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as authService from "../api/authApi";
import * as userService from "../api/userApi";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
          navigate(location.pathname);
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    setTimeout(() => getMe(), 1);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  const updateUser = async (input) => {
    const res = await userService.updateUser(input);
    setUser(res.data.user);
  };

  const deleteProfileImg = async () => {
    return await userService.deleteProfileImg();
    // setUser(res.data.user);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, updateUser, deleteProfileImg }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
