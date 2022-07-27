import { Link } from "react-router-dom";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import { StyledError } from "./style";
import errorImage from "../../assets/images/404.jpg";

const Error = () => {
  return (
    <StyledError>
      <Container>
        <p>
          Narahtçılığa görə üzr istəyirik. Siz mövcud olmayan və ya silinmiş
          səhifəyə daxil olmaq istəyirsiniz.
        </p>
        <h2>Oops... Səhifə tapılmadı :(</h2>
        <div>
          <Link to="/">Ana səhifə</Link>
        </div>
        <img src={errorImage} alt="errorImage" />
      </Container>
    </StyledError>
  );
};

export default Error;
