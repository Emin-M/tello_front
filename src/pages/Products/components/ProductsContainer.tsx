import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";
import Card from "../../../components/ReusuableComponents/Card";
import { useParams, useSearchParams } from "react-router-dom";
import Pagination from "../../../components/ReusuableComponents/Pagination";

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
  const { products, totalResult, loading } = useSelector(
    (state: RootState) => state.products
  );
  const { id } = useParams();
  const [selectValue, setSelectValue] = useState<string>("new");

  /* Url */
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsSort = searchParams.getAll("sort");

  useEffect(() => {
    paramsSort?.[0]?.length > 0 && setSelectValue(paramsSort?.[0]);
  }, [id]);

  /* Changing URL When Filter Products */
  useEffect(() => {
    searchParams.set("sort", selectValue);
    selectValue === "new" && searchParams.delete("sort");
    setSearchParams(searchParams);
  }, [selectValue, id]);

  /* Changing Select */
  const onChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectValue(value);
    searchParams.delete("page");
  };

  const onChangeMobile = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectValue(value);
    searchParams.delete("page");
  };

  /* Target for links */
  let target = "_self";
  let width = window.innerWidth;
  width > 700 && (target = "_blank");

  return (
    <StyledProductsContainer>
      <StyledFilters>
        <div>
          <img src={swap} alt="swap" />
          <select onChange={(e) => onChangeMobile(e)} value={selectValue}>
            <option value="new">Ən yenilər</option>
            <option value="asc">Ucuzdan bahaya</option>
            <option value="desc">Bahadan ucuza</option>
          </select>
        </div>
        <div onClick={() => setShowFilter(true)}>
          <img src={filter} alt="filter" />
          <p>Filterləmələr</p>
        </div>
      </StyledFilters>
      <div>
        <p>
          {loading === "pending" ? (
            <Skeleton animation="wave" width={200} height={40} variant="text" />
          ) : products.length > 0 ? (
            totalResult + " məhsul tapıldı"
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
        {loading === "pending" ? (
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
            <Card key={product?._id} product={product} target={target} />
          ))
        )}
      </Cards>
      {totalResult > 6 && (
        <Pagination count={totalResult} color="primary" size="large" />
      )}
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
