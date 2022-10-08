import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../src/contexts/AuthContext";
import { useState } from "react";
import logo from "../images/Dear-Diary-Official-Main-Logo-PNG-2.png";

function LoginForm() {
  const { login } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      toast.success("success login");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <div className="bg-warning pt-5 pb-5" style={{ minHeight: 820 }}>
        <div
          className=" mx-auto p-3 border border-1 bg-primary mt-5 rounded-5 "
          style={{ maxWidth: 400, minHeight: 400 }}
        >
          <div className=" text-center pt-3">
            <img className="p-3 w-75" src={logo} alt="logo" />
          </div>

          <form
            className="mt-3 position-relative top-3"
            onSubmit={handleSubmitForm}
          >
            <div className="mb-3 py-1">
              <label className="form-label text-secondary">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
              />
            </div>

            <div className="d-flex justify-content-around mt-3">
              <button type="submit" className="btn btn-secondary text-primary">
                Login
              </button>
              <Link className="navbar-brand text-secondary fs-5" to="/register">
                Not registered ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
