import { FC } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledLinks } from "./styles/Links.styled";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";

const Links: FC = () => {
  /* Url */
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll("brand");

  return (
    <StyledLinks>
      <li>
        Ana səhifə <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        {id} <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        <p>{params}</p>
      </li>
    </StyledLinks>
  );
};

export default Links;
