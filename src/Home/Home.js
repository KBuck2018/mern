import React, { Component } from "react";
import Recipe from "../Recipe/Recipe.js";
import { Link, Route } from "react-router-dom";

class Home extends Component {
  render() {
    const recipes = this.props.recipes.map((recipe, index) => {
      const path = `/recipes/${recipe.id}`;
      return (
        <div key={index}>
          <img src={recipe.thumbnail} />
          <p>
            <Link to={path}>{recipe.title}</Link>
          </p>
          <p>{recipe.href}</p>
          <p>{recipe.ingredients}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Recipes</h1>
        {recipes}
      </div>
    );
  }
}
export default Home;
