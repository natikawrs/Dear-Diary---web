import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../src/contexts/AuthContext";
import { useState } from "react";

function LoginModal({ open, close }) {
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

  if (!open) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        className=" mx-auto p-3 border border-1 bg-primary mt-5 rounded-5 shadow "
        style={{ maxWidth: 400, minHeight: 300 }}
      >
        <button className="btn btn-outline-secondary" onClick={close}>
          <i className="fa-solid fa-xmark" />
        </button>
        <form
          className="mt-3 position-relative top-3"
          onSubmit={handleSubmitForm}
        >
          <div className="mb-3 py-1">
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
            <button type="submit" className="btn btn-secondary ">
              Login
            </button>
            <Link className="navbar-brand text-muted" to="/register">
              Not registered ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
