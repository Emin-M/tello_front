import { StyledLinks } from "./styles/Links.styled";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";

const Links = () => {
  return (
    <StyledLinks>
      <li>
        Ana səhifə <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        Telefonlar <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        <p>Apple, </p>
        <p> Samsung</p>
      </li>
    </StyledLinks>
  );
};

export default Links;
