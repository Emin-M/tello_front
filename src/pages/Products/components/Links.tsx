import { FC } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
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
        <Link to="/">
          Ana səhifə <img src={arrowRight} alt="arrowRight" />
        </Link>
      </li>
      <li>
        <Link to={`/products/${id}`}>
          {id && id?.charAt(0).toUpperCase() + id?.slice(1)}
          <img src={arrowRight} alt="arrowRight" />
        </Link>
      </li>
      <li>
        <p>{params.length > 0 ? params : "Hamısı"}</p>
      </li>
    </StyledLinks>
  );
};

export default Links;
