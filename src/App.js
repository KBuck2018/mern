import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <h1 class="brand-logo center">Recipe App</h1>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/recipes">Home</a>
            </li>
            <li>
              <a href="/recipes/new">New Recipe</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
