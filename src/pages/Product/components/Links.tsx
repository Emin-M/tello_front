import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { StyledLinks } from "./styles/Links.styled";
import { Skeleton } from "@mui/material";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";

const Links: FC = () => {
  const { singleProduct, loading } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <StyledLinks>
      <li>
        Ana səhifə <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        Product <img src={arrowRight} alt="arrowRight" />
      </li>
      <li>
        <p>
          {loading === "pending" ? (
            <Skeleton variant="text" animation="wave" width={100} height={30} />
          ) : (
            singleProduct?.sku
          )}
        </p>
      </li>
    </StyledLinks>
  );
};

export default Links;
