import logo from './logo.svg';
import './App.scss';
import Header from "./js/Header";
import Login from "./js/Pages/Login";
function App() {


  return (
      <>
          <Header/>
          <div className="app">
              <h1 className={"login-title"}> Welcome in <span>HandiCraftin Market</span></h1>
              <br/>
              <Login/>
          </div>
      </>
  );
}

export default App;
