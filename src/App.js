import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About/About.js";
import HeaderMain from "./components/HeaderMain/HeaderMain.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <Router>
  <HeaderMain/>


      <Switch>
        <Route path="/about">
          <About />
        </Route>
       
        <Route path="/">
          <Home />
        </Route>
      </Switch>
   
  </Router>
  );
}

export default App;
