import React from "react";
import EditProfileForm from "./EditProfileForm";

const Profile = ({
  currentUserName,
  setCurrentUserName,
  currentUserAvatar,
  setCurrentUserAvatar
}) => {
  return (
    <div>
      <EditProfileForm
        currentUserName={currentUserName}
        setCurrentUserName={setCurrentUserName}
        currentUserAvatar={currentUserAvatar}
        setCurrentUserAvatar={setCurrentUserAvatar}
      />
    </div>
  );
};

export default Profile;
