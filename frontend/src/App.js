import './App.css';
import {BrowserRouter as Router, Switch, Router} from 'react-router-dom';



function App() {
  return (
    <Router>
    <main>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/product/:id" />
        <Route exact path="/cart" />
      </Switch>
    </main>
    </Router>
  );
}

export default App;
