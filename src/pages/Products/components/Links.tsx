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
        {id && id?.charAt(0).toUpperCase() + id?.slice(1)}
        <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        <p>{params.length > 0 ? params : "Hamısı"}</p>
      </li>
    </StyledLinks>
  );
};

export default Links;
