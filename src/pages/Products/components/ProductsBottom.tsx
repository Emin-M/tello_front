import Filters from "./Filters";

/* Styles */
import { StyledProductsBottom } from "./styles/ProductsBottom.styled";
import ProductsContainer from "./ProductsContainer";

const ProductsBottom = () => {
  return (
    <StyledProductsBottom>
      <Filters />
      <ProductsContainer />
    </StyledProductsBottom>
  );
};

export default ProductsBottom;
