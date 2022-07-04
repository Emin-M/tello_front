import { FC, useState } from "react";
import Filters from "./Filters";
import { useSearchParams } from "react-router-dom";
import { IProduct } from "../../../modules/types/products";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

/* Styles */
import { StyledProductsBottom } from "./styles/ProductsBottom.styled";
import ProductsContainer from "./ProductsContainer";

const ProductsBottom: FC = () => {
  const { categoryProducts } = useSelector(
    (state: RootState) => state.products
  );
  const [showFilter, setShowFilter] = useState<boolean>(false);

  /* Url */
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll("brand");
  let paramsArray = params?.[0]?.split(",");

  /* Filtering Products */
  let [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const filterProductsByBrands = () => {
    paramsArray?.length > 0
      ? categoryProducts?.map((categoryProduct) => {
          categoryProduct.categories.map((subCategory) => {
            if (paramsArray?.includes(subCategory.name)) {
              filteredProducts = [...filteredProducts, categoryProduct];
            }
          });
        })
      : (filteredProducts = [...categoryProducts]);
  };

  filterProductsByBrands();

  return (
    <StyledProductsBottom>
      <Filters showFilter={showFilter} setShowFilter={setShowFilter} />
      <ProductsContainer
        setShowFilter={setShowFilter}
        filteredProducts={filteredProducts}
      />
    </StyledProductsBottom>
  );
};

export default ProductsBottom;
