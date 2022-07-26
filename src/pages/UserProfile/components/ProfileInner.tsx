import { Outlet } from "react-router-dom";
import { StyledProfileInner } from "./styles/ProfileInner.styled";

const ProfileInner = () => {
  return (
    <StyledProfileInner>
      <Outlet />
    </StyledProfileInner>
  );
};

export default ProfileInner;
