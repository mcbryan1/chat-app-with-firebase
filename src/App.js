import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Router>
    </div>
  );
}

export default App;
