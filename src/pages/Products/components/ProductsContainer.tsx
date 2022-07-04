import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";
import Card from "../../ReusuableComponents/Card";

/* Styles */
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import {
  Cards,
  StyledFilters,
  StyledProductsContainer,
} from "./styles/ProductsContainer.styled";

/* Images */
import swap from "../../../assets/svg/swap.svg";
import filter from "../../../assets/svg/filter.svg";

interface IProps {
  setShowFilter: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  filteredProducts: IProduct[];
}

const ProductsContainer = ({ setShowFilter, filteredProducts }: IProps) => {
  const { categoryProducts, loading } = useSelector(
    (state: RootState) => state.products
  );
  const [selectValue, setSelectValue] = useState("new");

  const onChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value);
  };

  return (
    <StyledProductsContainer>
      <StyledFilters>
        <div>
          <img src={swap} alt="swap" />
          <p>Sıralama</p>
        </div>
        <div onClick={() => setShowFilter(true)}>
          <img src={filter} alt="filter" />
          <p>Filterləmələr</p>
        </div>
      </StyledFilters>
      <div>
        <p>
          {loading ? (
            <Skeleton animation="wave" width={200} height={40} variant="text" />
          ) : filteredProducts.length > 0 ? (
            filteredProducts.length + " mehsul tapildi"
          ) : (
            "0 mehsul tapildi"
          )}
        </p>
        <FormControl>
          <Select
            id="demo-simple-select"
            defaultValue="new"
            value={selectValue}
            onChange={onChange}
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
          filteredProducts?.map((product: IProduct) => (
            <Card key={product?.id} product={product} />
          ))
        )}
      </Cards>
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
