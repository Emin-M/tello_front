import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { StyledLinks } from "./styles/Links.styled";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";

const Links: FC = () => {
  const { singleProduct } = useSelector((state: RootState) => state.products);

  return (
    <StyledLinks>
      <li>
        Ana səhifə <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        Product <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        <p>{singleProduct?.name}</p>
      </li>
    </StyledLinks>
  );
};

export default Links;
