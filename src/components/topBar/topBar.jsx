import icons from "../../config/iconsConfig";
import UserButton from "../userButton/userButton";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <img src={icons.search} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="">
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
