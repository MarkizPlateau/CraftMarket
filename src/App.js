import React from "react";
import './App.scss';
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



function App() {
  return (
      <>
          <HashRouter>
              <Switch>
                  <Route path='/main' component={Main} />
                  <Route exact path='/' component={Login}/>
                  {/*<Route path="*">*/}
                  {/*    <NotFound/>*/}
                  {/*</Route>*/}
              </Switch>
          </HashRouter>
        </>
  );
}

export default App;
