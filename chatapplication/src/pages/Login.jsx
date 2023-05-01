import React, { Component } from "react";
import "../style.scss";
export class Login extends Component {
  render() {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat Application</span>
          <span className="title">Login</span>
          <form>
            <input type="mail" placeholder="Mail" />
            <input type="password" placeholder="Password" />

            <button className="">Sign in</button>
          </form>
          <p>You do have an acoount? Register</p>
        </div>
      </div>
    );
  }
}

export default Login;
