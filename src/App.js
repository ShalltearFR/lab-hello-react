import './App.css';
import ironHackLogo from "./images/ironhack-logo-xs.png"
import menuTop from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <header>
        <div id="navBar">
          <img src={ironHackLogo} alt=""/>
          <img src={menuTop} alt="" id="menuTop"/>
        </div>
        <div id="contentHeader">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use <br/>the most popular frontend library, and become a super Ninja developer.</p>
          <a href="#">Awesome!</a>
        </div>
      </header>

      <div id="description">
        <div>
        <img src={icon1} alt=""/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
          <img src={icon2} alt=""/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
        <img src={icon3} alt=""/>
          <h2>Single-Way</h2>
          <p>A set set of immuable values are passed to the component's.</p>
        </div>

        <div>
        <img src={icon4} alt=""/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
