/* Styles */
import { StyledProductsContainer } from "./style";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";

/* Components */
import Links from "./components/Links";
import ProductsBottom from "./components/ProductsBottom";

const Products = () => {
  return (
    <StyledProductsContainer>
      <Container>
        <Links />
        <ProductsBottom />
      </Container>
    </StyledProductsContainer>
  );
};

export default Products;
