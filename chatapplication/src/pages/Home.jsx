import React, { Component } from "react";
import { Sidebar } from "../component/Sidebar";
import { Chat } from "../component/Chat";
export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    );
  }
}

export default Home;
