import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { ZoomNavigationMenuStyle } from "./NavBar";
import { Trailblazers } from "./Components/Trailblazers/Trailblazers";
import { Home } from "./Components/Home/Home";
import { Pitfalls } from "./Components/Pitfalls/Pitfalls";
import { AboutUs } from "./Components/About/AboutUs";

import "./App.css";
import { colors } from "@material-ui/core";

function App() {
  return (
    <Router>
      <main>
        <Link
          to={{
            pathname: "/",
            component: { Home },
          }}
        >
          <h1>Asian Erasure.</h1>
        </Link>

        <nav>
          <ul>
            <ZoomNavigationMenuStyle />
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trailblazers" component={Trailblazers} />
          <Route path="/pitfalls" component={Pitfalls} />
          <Route path="/about" component={AboutUs} />
        </Switch>
      </main>
      <body></body>
    </Router>
  );
}

export default App;
