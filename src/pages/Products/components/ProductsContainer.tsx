import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";
import Card from "../../../components/ReusuableComponents/Card";
import { useParams, useSearchParams } from "react-router-dom";

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
}

const ProductsContainer = ({ setShowFilter }: IProps) => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const { id } = useParams();
  const [selectValue, setSelectValue] = useState<string>("new");

  /* Url */
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsBrand = searchParams.getAll("brand");
  let paramsSort = searchParams.getAll("sort");
  let paramsArray = paramsBrand?.[0]?.split(",");

  useEffect(() => {
    paramsSort?.[0]?.length > 0 && setSelectValue(paramsSort?.[0]);
  }, [id]);

  /* Changing URL When Filter Products */
  useEffect(() => {
    if (paramsArray?.length > 0 && selectValue !== "new") {
      setSearchParams(`brand=${paramsArray}&sort=${selectValue}`);
    } else if (paramsArray?.length > 0 && selectValue === "new") {
      setSearchParams(`brand=${paramsArray}`);
    } else if (selectValue !== "new") {
      setSearchParams(`sort=${selectValue}`);
    } else if (selectValue === "new") {
      setSearchParams("");
    }
  }, [selectValue, id]);

  /* Changing Select */
  const onChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectValue(value);
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
          ) : products.length > 0 ? (
            products.length + " məhsul tapıldı"
          ) : (
            "0 məhsul tapıldı"
          )}
        </p>
        <FormControl>
          <Select
            id="demo-simple-select"
            onChange={onChange}
            value={selectValue}
            label={false}
          >
            <MenuItem value="new">Ən yenilər</MenuItem>
            <MenuItem value="asc">Ucuzdan bahaya</MenuItem>
            <MenuItem value="desc">Bahadan ucuza</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Cards
        style={
          products?.length > 2
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-start", gap: "20px" }
        }
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: "22px",
              width: "100%",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="30%"
              height="300px"
              className="skeleton"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="30%"
              height="300px"
              className="skeleton"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="30%"
              height="300px"
              className="skeleton"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="30%"
              height="300px"
              className="skeleton"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="30%"
              height="300px"
              className="skeleton"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="30%"
              height="300px"
              className="skeleton"
            />
          </div>
        ) : (
          products?.map((product: IProduct) => (
            <Card key={product?.id} product={product} />
          ))
        )}
      </Cards>
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
