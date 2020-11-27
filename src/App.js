import React from "react";
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
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
          <Route exact path='/' component={Login}/>
          <Route component={NotFound} />
          <Login/>
          <NotFound/>
          </Switch>
      </HashRouter>
  );
}

export default App;
