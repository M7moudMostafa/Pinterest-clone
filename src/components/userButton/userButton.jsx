import { useState } from "react";
import icons from "../../config/iconsConfig";
import "./userButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  // TEMP USER
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src={icons.no_Avatar} alt="" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src={icons.arrow}
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
