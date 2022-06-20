import components from "../../assets/images/icon2.jpg";
import style from "./style.module.css";

function Componentes() {
  return (
    <div className={style.background}>
      <img src={components} alt="components" />
      <h3>Components</h3>
      <p>Build encapsulated</p>
      <p>components that</p>
      <p>manege their state</p>
    </div>
  );
}

export default Componentes;
