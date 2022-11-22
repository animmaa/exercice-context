import React from 'react';
import { NavLink } from 'react-router-dom';
import UserAvatar from './UserAvatar';

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/profile">
          <UserAvatar />
        </NavLink>
      </nav>
    </header>
  );
}
