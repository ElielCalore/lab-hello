import single from "../../assets/images/icon3.jpg";
import style from "./style.module.css";

function Single() {
  return (
    <div className={style.background}>
      <img src={single} alt="single" />
      <h3>Single-Way</h3>
      <p>A set of immutable</p>
      <p>values are passed to</p>
      <p>the componet's</p>
    </div>
  );
}
export default Single;
