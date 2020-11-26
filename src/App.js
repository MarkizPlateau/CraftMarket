import React from "react";
import logo from './logo.svg';
import './App.scss';
import Header from "./js/Header";
import Login from "./js/Pages/Login";
import NotFound from "./js/Pages/NotFound";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



function App() {
  return (
      <HashRouter>
          <Switch>
          <Route exact path='/header' component={Header} />
          <Route exact path='/login' component={Login}/>
          <Route component={NotFound} />
          <Login/>
          <NotFound/>
          </Switch>
      </HashRouter>
  );
}

export default App;
