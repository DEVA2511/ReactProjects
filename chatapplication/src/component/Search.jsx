import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="userChat">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile"
          />
          <div className="userChatInfo">Devraj</div>
        </div>
      </div>
    );
  }
}

export default Search;