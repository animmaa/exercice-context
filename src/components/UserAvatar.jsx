import React from "react";

export default function UserAvatar({ currentUserAvatar, currentUserName }) {
  return (
    <div className="avatar">
      <img
        src={
          currentUserAvatar ||
          "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
        }
        alt={currentUserName}
      />
    </div>
  );
}
