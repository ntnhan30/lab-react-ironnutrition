// jshint ignore: start

import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form>
          <input
            type="text"
            name="input"
            value={this.props.input}
            placeholder="Food"
            onChange={this.props.onSearch}
          />
          {this.props.input}
        </form>
      </div>
    );
  }
}

export default Search;
