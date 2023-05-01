import React, { Component } from "react";
import Message from "./Message";
export class Messages extends Component {
  render() {
    return (
      <div className="messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

export default Messages;
