import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
