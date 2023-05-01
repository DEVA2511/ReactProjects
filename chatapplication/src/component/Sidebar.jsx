import React, { Component } from "react";
import { Navebar } from "../component/Navebar";
import Search from "./Search";
import Chats from "./Chats";
export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Navebar />
        <Search />
        <Chats />
      </div>
    );
  }
}

export default Sidebar;
