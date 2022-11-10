import React from "react";

export default function EditProfileForm({
  currentUserName,
  setCurrentUserName,
  currentUserAvatar,
  setCurrentUserAvatar
}) {
  const handleNameInput = (e) => {
    setCurrentUserName(e.target.value);
  };
  const handleAvatarUrlInput = (e) => {
    setCurrentUserAvatar(e.target.value);
  };
  return (
    <form>
      <h2>Your informations</h2>
      <label>
        Your name
        <input type="text" value={currentUserName} onChange={handleNameInput} />
      </label>
      <br />
      <label>
        Your avatar URL :
        <input
          type="url"
          value={currentUserAvatar}
          onChange={handleAvatarUrlInput}
        />
      </label>
    </form>
  );
}
