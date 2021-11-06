import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ZoomNavigationMenuStyle } from "./NavBar";
import { Trailblazers } from "./Components/Trailblazers/Trailblazers";
import { Home } from "./Components/Home/Home";
import { Pitfalls } from "./Components/Pitfalls/Pitfalls";
import { AboutUs } from "./Components/About/AboutUs";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <main>
      <h1>Asian Erasure.</h1>
        <nav>
          <ul>
            <ZoomNavigationMenuStyle />
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
              <Redirect to="/home" />
          </Route>
          <Route exact path="/Asian-Erasure">
              <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/trailblazers">
            <Trailblazers />
          </Route>
          <Route path="/pitfalls">
            <Pitfalls />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
