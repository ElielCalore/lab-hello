import Componentes from "./components/Components";
import Declarative from "./components/Declarative";
import NavBar from "./components/Navbar";
import Single from "./components/Single";
import JSX from "./components/JSX";
import Title from "./components/Title";
import Text from "./components/Text";
import Button from "./components/Button";
import style from "./cssModular.module.css";

function App() {
  return (
    <div>
      <div className={style.background}>
        <NavBar />
        <Title />
        <Text />
        <Button />
      </div>

      <div className={style.flexBox}>
        <Declarative />
        <Componentes />
        <Single />
        <JSX />
      </div>
    </div>

    /*
 <div className="App">

  </div>;
*/
  );
}

export default App;

/* 

 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/
