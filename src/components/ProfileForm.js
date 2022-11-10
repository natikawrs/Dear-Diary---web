import { toast } from "react-toastify";
import { useAuth } from "../../src/contexts/AuthContext";
import { useState, useRef } from "react";
import { validateUpdateProfile } from "../../src/validations/updateProfileValidate";
import Avatar from "../components/Avatar";

function ProfileForm() {
  const {
    user: { profileImage, userName, id },
    updateUser,
    deleteProfileImg
  } = useAuth();

  const [input, setInput] = useState({
    profileImage,
    userName,
    password: "",
    confirmPassword: ""
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("profileImage", file);
      formData.append("userName", input.userName);
      formData.append("password", input.password);

      const { error } = validateUpdateProfile(input);
      if (error) {
        return toast.error(error.message);
      }

      await updateUser(formData);
      toast.success("success update");
      setFile(null);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const removeProfilePic = async (e) => {
    e.preventDefault();
    setFile(null);
    inputEl.current.value = "";
    await deleteProfileImg();
    window.location.reload();
  };

  return (
    <div className="bg-warning p-3">
      <div
        className="mx-auto p-4  border border-1 bg-primary mt-1 rounded-5 shadow  d-flex flex-column justify-content-center mt-5"
        style={{ maxWidth: 500, minHeight: 660 }}
      >
        <div className="">
          <input
            type="file"
            className="d-none"
            ref={inputEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />

          <div className="text-center mt-3">
            <button
              className="btn btn-outline-primary bg-secondary"
              style={{ position: "relative", left: "220px", top: "-90px" }}
              onClick={removeProfilePic}
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <span onClick={() => inputEl.current.click()}>
              <Avatar
                src={file ? URL.createObjectURL(file) : profileImage}
                size="200"
              />
            </span>
          </div>
        </div>

        <form className="d-flex flex-column gap-2" onSubmit={handleClickSave}>
          <div className="mb-2">
            <label className="form-label pt-3">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="userName"
              value={input.userName}
              onChange={handleChangeInput}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-2 pb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Confirm password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
          <div className="d-flex justify-content-around mt-3">
            <button type="submit" className="btn btn-secondary text-primary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
