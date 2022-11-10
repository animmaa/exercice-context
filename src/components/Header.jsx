import React from "react";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function Header({ currentUserAvatar, currentUserName }) {
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
