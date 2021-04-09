import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import apiHandler from "../api/apiHandler";

export default class Game extends Component {
  state = {
    allnames: [],
    randomname: [],
    count: 10,
  };

  // GET NAMES
  componentDidMount() {
    apiHandler.getName().then((response) => {
      this.setState({
        allnames: response,
        randomname: response[Math.floor(Math.random() * response.length)],
      });
    });
  }

  handleMaleClick = (event) => {
    event.preventDefault();

    if (this.state.count === 1) {
      alert("0 points c'est un échec ! \n Vous avez perdu !");
      this.props.history.push("/");
    } else if (this.state.count === 19) {
      alert("Bravo vous avez atteint les 20 points ! \n Vous avez gagné !");
      this.props.history.push("/");
    } else if (this.state.randomname.Gender == "male") {
      this.setState({
        count: this.state.count + 1,
        randomname: this.state.allnames[
          Math.floor(Math.random() * this.state.allnames.length)
        ],
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        randomname: this.state.allnames[
          Math.floor(Math.random() * this.state.allnames.length)
        ],
      });
    }
  };

  handleFemaleClick = (event) => {
    event.preventDefault();

    if (this.state.count === 1) {
      alert("0 points c'est un échec ! \n Vous avez perdu !");
      this.props.history.push("/");
    } else if (this.state.count === 19) {
      alert("Bravo vous avez atteint les 20 points ! \n Vous avez gagné !");
      this.props.history.push("/");
    } else if (this.state.randomname.Gender == "female") {
      this.setState({
        count: this.state.count + 1,
        randomname: this.state.allnames[
          Math.floor(Math.random() * this.state.allnames.length)
        ],
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        randomname: this.state.allnames[
          Math.floor(Math.random() * this.state.allnames.length)
        ],
      });
    }
  };

  render() {
    console.log("gender:", this.state.randomname.Gender);
    console.log("count:", this.state.count);
    return (
      <div className="App-header">
        <p>Nombre de points actuels: {this.state.count}/20</p>
        <h1>{this.state.randomname.FirstName}</h1>
        <button onClick={this.handleMaleClick}>Masculin</button>
        <br />
        <button onClick={this.handleFemaleClick}>Féminin</button>
        <br />
        <p>
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
    );
  }
}
