import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
export class App extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default App;
