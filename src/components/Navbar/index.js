import ironhackLogo from "../../assets/images/ironhack-logo.jpg";
import menuTop from "../../assets/images/menu-top.jpg";
import style from "./style.module.css";

function NavBar() {
  return (
    <div className={style.background}>
      <img src={ironhackLogo} alt="Logo" />;
      <img src={menuTop} alt="menuTop" />
    </div>
  );
}

export default NavBar;
