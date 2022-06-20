import style from "./style.module.css";

function Button() {
  return (
    <nav>
      <button className={style.size} alt="button">
        Awesome!
      </button>
    </nav>
  );
}
export default Button;
