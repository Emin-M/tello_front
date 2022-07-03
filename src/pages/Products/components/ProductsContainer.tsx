import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";
import Card from "../../ReusuableComponents/Card";

/* Styles */
import { FormControl, MenuItem, Select, Skeleton } from "@mui/material";
import {
  Cards,
  StyledFilters,
  StyledProductsContainer,
} from "./styles/ProductsContainer.styled";

/* Images */
import swap from "../../../assets/svg/swap.svg";
import filter from "../../../assets/svg/filter.svg";

const ProductsContainer: FC = () => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <StyledProductsContainer>
      <StyledFilters>
        <div>
          <img src={swap} alt="swap" />
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <img src={filter} alt="filter" />
          <p>Lorem, ipsum.</p>
        </div>
      </StyledFilters>
      <div>
        <p>287 məhsul tapıldı</p>
        <FormControl>
          <Select
            id="demo-simple-select"
            // value={age}
            // onChange={}
            defaultValue="new"
          >
            <MenuItem value="new">Ən yenilər</MenuItem>
            <MenuItem value="increase">Ucuzdan bahaya</MenuItem>
            <MenuItem value="decrease">Bahadan ucuza</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Cards>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "22px",
              width: "100%",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={380}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={380}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={380}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={380}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={380}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={340}
              height={380}
            />
          </div>
        ) : (
          products?.map((product: IProduct) => (
            <Card key={product.id} product={product} />
          ))
        )}
      </Cards>
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
