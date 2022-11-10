import React, { useContext } from "react";
import CurrentUserContext from "./context/currentUser";
import EditProfileForm from "./EditProfileForm";

const Profile = () => {
  const {
    currentUserName,
    setCurrentUserName,
    currentUserAvatar,
    setCurrentUserAvatar
  } = useContext(CurrentUserContext)
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
