import React from 'react';
import '../styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import { CurrentUserContextProvider } from './context/currentUser';

export default function App() {
  return (
    <CurrentUserContextProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </CurrentUserContextProvider>
  );
}
