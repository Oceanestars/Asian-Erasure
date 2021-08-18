import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ZoomNavigationMenuStyle } from "./NavBar";
import { Trailblazers } from "./Components/Trailblazers/Trailblazers";
import { Home } from "./Components/Home/Home";
import { Pitfalls } from "./Components/Pitfalls/Pitfalls";
import { AboutUs } from "./Components/About/AboutUs";

import './App.css';
import { colors } from "@material-ui/core";

function App() {
  return (
<Router>
    <main>
      <h1 style={{backgroundColor:"#46B893", color:"white", display:"inline-block"}}>Asian Erasure</h1>
      <nav> 
        <ul style={{display:"inline-block"}}> 
          <ZoomNavigationMenuStyle/>
        </ul>
      </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trailblazers"  component={Trailblazers} />
      <Route path="/pitfalls"  component={Pitfalls} />
      <Route path="/about"  component={AboutUs} />
    </Switch>
    </main>
    <body>
      
    </body>
</Router>

  );
}

export default App;
