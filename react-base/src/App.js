import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
  
function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
  
function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

export default function BasicExample() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Link to="/">Home</Link><br />
                    <Link to="/about">About</Link><br />
                    <Link to="/dashboard">Dashboard</Link><br />

                    {/* 引用其他子应用 */}
                    <Link to="/vue">vue子应用</Link><br />
                    <Link to="/react">react子应用</Link><hr />

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
            </BrowserRouter>
            <div id="vue"></div>
            <div id="react"></div>
        </>
    );
}
