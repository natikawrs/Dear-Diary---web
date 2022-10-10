import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../src/contexts/AuthContext";
import { useState } from "react";
import { validateRegister } from "../../src/validations/userValidate";
import logo from "../images/Dear-Diary-Official-Main-Logo-PNG-2.png";

function RegisterForm() {
  const { register } = useAuth();

  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      await register(input);
      toast.success("success register");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="bg-warning pt-5 pb-5 ">
      <div
        className="mx-auto p-4 border border-1 bg-primary rounded-5 shadow  d-flex flex-column justify-content-center"
        style={{ maxWidth: 500, minHeight: 710 }}
      >
        <div className=" text-center pt-5">
          <img className="p-3 w-75" src={logo} alt="logo" />
        </div>

        <form className="d-flex flex-column gap-0" onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <label className="form-label text-secondary">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="userName"
              value={input.userName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-secondary">Email</label>
            <input
              type="email"
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
              type="text"
              className="form-control"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-secondary ">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Confirm password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
          <div className="d-flex justify-content-around mt-4 mb-4">
            <button type="submit" className="btn btn-secondary text-primary">
              Create Account
            </button>
            <Link className="navbar-brand text-secondary fs-5" to="/login">
              Already registered? Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
