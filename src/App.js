import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route patch="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
