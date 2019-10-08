import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from  './components/Header'
import SearchCocktails from './containers/SearchCocktails'
import Home from './containers/Home'
import Cocktails from './containers/Cocktails'
import Cocktail from './containers/Cocktail'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/search" component={SearchCocktails} />
          <Route path="/list/:letter" component={Cocktails} />
          <Route path="/cocktail/:id" component={Cocktail} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
