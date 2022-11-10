import React, { useState } from 'react';
import '../styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import CurrentUserContext from './context/currentUser';

export default function App() {
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserAvatar, setCurrentUserAvatar] = useState('');

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserName,
        setCurrentUserName,
        currentUserAvatar,
        setCurrentUserAvatar,
      }}
    >
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/profile"
              render={() => {
                return <Profile />;
              }}
            />
          </Switch>
        </main>
        <Footer />
      </Router>
    </CurrentUserContext.Provider>
  );
}
