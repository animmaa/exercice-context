import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "./context/currentUser";
import UserAvatar from "./UserAvatar";

export default function Header() {
  const { currentUserAvatar, currentUserName } = useContext(CurrentUserContext)
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/profile">
          <UserAvatar
            currentUserAvatar={currentUserAvatar}
            currentUserName={currentUserName}
          />
        </NavLink>
      </nav>
    </header>
  );
}
