import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { filterProducts } from "../../redux/actions/productActions";
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

  /* Url */
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsSort = searchParams.getAll("sort");
  console.log(paramsSort?.[0]);

  useEffect(() => {
    if (id && paramsSort?.[0]) {
      dispatch(
        filterProducts({
          sortBy: "price",
          direction: paramsSort?.[0],
          category: [id],
        })
      );
    } else if (id && !paramsSort?.[0]) {
      dispatch(
        filterProducts({
          category: [id],
        })
      );
    }
  }, [paramsSort?.[0], id]);

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
