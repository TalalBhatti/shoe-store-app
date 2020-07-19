import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store.js';
import NavBar from './Components/Navbar.js';
function RouteConfig() {

  return (
	<div>
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/Store" component={Store}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;