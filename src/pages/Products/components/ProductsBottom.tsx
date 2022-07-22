import { FC, useMemo, useState } from "react";
import Filters from "./Filters";

/* Styles */
import { StyledProductsBottom } from "./styles/ProductsBottom.styled";
import ProductsContainer from "./ProductsContainer";

const ProductsBottom: FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <StyledProductsBottom>
      <Filters showFilter={showFilter} setShowFilter={setShowFilter} />
      <ProductsContainer setShowFilter={setShowFilter} />
    </StyledProductsBottom>
  );
};

export default ProductsBottom;
