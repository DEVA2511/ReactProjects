import React, { Component } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

export class Input extends Component {
  render() {
    return (
      <div className="input">
        <input type="text" placeholder="Type somthing" />
        <div className="send">
          <img src={Img} alt="" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={Attach} alt="" />
          </label>
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export default Input;
