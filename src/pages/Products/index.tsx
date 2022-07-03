import React, { useEffect } from "react";

/* Styles */
import { StyledProductsContainer } from "./style";
import { Container } from "../ReusuableComponents/styles/Container.styled";

/* Components */
import Links from "./components/Links";
import ProductsBottom from "./components/ProductsBottom";

const Products = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
