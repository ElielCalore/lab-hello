import jsx from "../../assets/images/icon4.jpg";
import style from "./style.module.css";

function JSX() {
  return (
    <div className={style.background}>
      <img src={jsx} alt="jsx" />
      <h3>JSX</h3>
      <p>Statically-typed,</p>
      <p>designed to run on</p>
      <p>modern browsers.</p>
    </div>
  );
}

export default JSX;
