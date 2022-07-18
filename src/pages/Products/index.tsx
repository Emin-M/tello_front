import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

/* Styles */
import { StyledProductsContainer } from "./style";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";

/* Components */
import Links from "./components/Links";
import ProductsBottom from "./components/ProductsBottom";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(fetchProductsByCategory([id]));
  }, [id]);

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
