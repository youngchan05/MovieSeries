import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import MoviesDetail from './components/views/MovieDetail/MoviesDetail';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage , null)}/>
          <Route exact path="/login" component={Auth(LoginPage , null , false)}/>
          <Route exact path="/movie/:movieId" component={Auth(MoviesDetail ,null)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
