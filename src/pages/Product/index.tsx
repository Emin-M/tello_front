import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import {
  fetchProductById,
  fetchProductVariants,
} from "../../redux/actions/productActions";
import { AppDispatch } from "../../redux/store";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import Links from "./components/Links";
import ProductTop from "./components/ProductTop";
import { ProductContainer } from "./style";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(fetchProductById(id));
    id && dispatch(fetchProductVariants(id));
  }, []);

  return (
    <ProductContainer>
      <Container>
        <Links />
        <ProductTop />
        <Outlet />
      </Container>
    </ProductContainer>
  );
};

export default Product;
