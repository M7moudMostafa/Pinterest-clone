import "./leftBar.css";
import icons from "../../config/iconsConfig";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img src={icons.logo} alt="" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <img src={icons.home} alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src={icons.create} alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src={icons.updates} alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src={icons.messages} alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src={icons.messages} alt="" />
        </a>
      </div>
    </div>
  );
};

export default LeftBar;
