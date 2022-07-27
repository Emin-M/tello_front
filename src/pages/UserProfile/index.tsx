import { useEffect } from "react";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import ProfileLinks from "./components/ProfileLinks";
import ProfileInner from "./components/ProfileInner";
import { StyledProfile } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getUser } from "../../redux/actions/userActions";

const UserProfile = () => {
  const { user, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (loading === "succeeded" || loading === "failed") {
      !user?.firstname && localStorage.removeItem("customerId");
    }
  }, [loading]);

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
