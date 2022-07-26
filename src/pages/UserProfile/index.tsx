import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import ProfileLinks from "./components/ProfileLinks";
import ProfileInner from "./components/ProfileInner";
import { StyledProfile } from "./style";

const UserProfile = () => {
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
