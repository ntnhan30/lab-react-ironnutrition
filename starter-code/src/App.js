// jshint ignore: start

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      input: "",
      foodSelected: 0
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCardClick(i) {
    this.setState({
      foodSelected: i
    });
  }

  handleSearch(e) {
    console.log("handleSearch", e);
    e.preventDefault();
    // TODO: change the state input
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Search input={this.state.input} onSearch={e => this.handleSearch(e)} />
        <div className="todayFood">
          <h1>Today Food</h1>
          <ul>
            <li>
              {foods[this.state.foodSelected].name +
                " " +
                foods[this.state.foodSelected].calories}
            </li>
          </ul>
          <p>Total Calories</p>
        </div>

        {foods
          .filter(food => {
            return food.name
              .toUpperCase()
              .includes(this.state.input.toUpperCase());
          })
          .map((food, i) => (
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={food.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{food.name}</strong> <br />
                      <small>{food.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                      <button
                        className="button is-info"
                        onClick={e => this.handleCardClick(i)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
