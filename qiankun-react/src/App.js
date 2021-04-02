import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>react子应用的home</h2>
        </div>
    );
}
  
function About() {
    return (
        <div>
            <h2>react子应用的About</h2>
        </div>
    );
}
  
function Dashboard() {
    return (
        <div>
            <h2>react子应用的Dashboard</h2>
        </div>
    );
}

export default function BasicExample() {
    return (
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
            <div>
                <Link to="/">子应用home</Link><br />
                <Link to="/about">子应用About</Link><br />
                <Link to="/dashboard">子应用Dashboard</Link><br />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
