import declarative from "../../assets/images/icon1.jpg";
import style from "./style.module.css";

function Declarative() {
  return (
    <div className={style.background}>
      <img src={declarative} alt="declarative" />
      <h3>Declarative</h3>
      <p>React make it</p>
      <p>painless to create</p>
      <p>interactive Uls.</p>
    </div>
  );
}
export default Declarative;
