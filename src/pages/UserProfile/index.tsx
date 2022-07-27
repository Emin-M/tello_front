import { useEffect } from "react";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import ProfileLinks from "./components/ProfileLinks";
import ProfileInner from "./components/ProfileInner";
import { StyledProfile } from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getUser } from "../../redux/actions/userActions";

const UserProfile = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <StyledProfile>
      <Container>
        <ProfileLinks />
        <ProfileInner />
      </Container>
    </StyledProfile>
  );
};

export default UserProfile;
