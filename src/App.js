import logo from './logo.svg';
import './App.scss';
import Header from "./js/Header";
import Logo from "./js/Logo";

function App() {
  return (
      <>
          <Header/>
          <div className="app">
              <h1> Welcome in HandiCraftin' Дело</h1>
              <p>There will be some components</p>
              <br/>
              <Logo/>
          </div>
      </>
  );
}

export default App;
