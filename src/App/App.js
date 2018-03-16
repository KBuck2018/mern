import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Home/Home.js";
import Recipe from "../Recipe/Recipe.js";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/recipes")
      .then(res => res.data)
      .then(data => {
        this.setState({
          recipes: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <h1 className="brand-logo center">Recipe App</h1>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/recipes">Home</Link>
              </li>
              <li>
                <Link to="/recipes/new">New Recipe</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Switch>
            <Route
              path="/recipes/:id"
              render={props => {
                return <Recipe {...props} recipes={this.state.recipes} />;
              }}
            />
            <Route
              path="/recipes"
              render={() => <Home recipes={this.state.recipes} />}
            />
            <Route path="/*" render={() => <Redirect to="/recipes" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
