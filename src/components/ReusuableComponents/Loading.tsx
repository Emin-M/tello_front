import { StyledLoading } from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
