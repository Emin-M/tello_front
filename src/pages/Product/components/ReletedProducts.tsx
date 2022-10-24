import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { StyledReletedProducts } from "./styles/ReletedProducts.styled";
import Card from "../../../components/ReusuableComponents/Card";
import { Skeleton } from "@mui/material";

const ReletedProducts = () => {
  const { singleProduct, loading } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <StyledReletedProducts>
      <h2>Əlaqədar Mehsullar</h2>
      {loading === "pending" ? (
        <div style={{ justifyContent: "space-between" }}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="25%"
            height={350}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="25%"
            height={350}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="25%"
            height={350}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="25%"
            height={350}
          />
        </div>
      ) : (
        <div>
          {singleProduct?.related_products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </StyledReletedProducts>
  );
};

export default ReletedProducts;
