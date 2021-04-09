import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Trouvez le bon genre de chaque prénom !</h1>
        <h2>Objectif : atteindre les 20 points pour gagner la partie</h2>
        <p>(+1 point par bonne réponse et -1 point par mauvaise réponse)</p>
        <button>
          <Link to="/game">Démarrer le jeu</Link>
        </button>
      </div>
    );
  }
}
