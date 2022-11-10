import React, { useState } from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAvatar, setCurrentUserAvatar] = useState("");

  return (
    <Router>
      <Header
        currentUserAvatar={currentUserAvatar}
        currentUserName={currentUserName}
      />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/profile"
            render={(routerProps) => {
              return (
                <Profile
                  currentUserName={currentUserName}
                  setCurrentUserName={setCurrentUserName}
                  setCurrentUserAvatar={setCurrentUserAvatar}
                  currentUserAvatar={currentUserAvatar}
                  {...routerProps}
                />
              );
            }}
          />
        </Switch>
      </main>
      <Footer currentUserName={currentUserName} />
    </Router>
  );
}
