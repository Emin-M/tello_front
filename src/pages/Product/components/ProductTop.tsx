import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { Rating, Skeleton } from "@mui/material";
import { addProductToBasket } from "../../../redux/actions/cardActions";
import { useParams } from "react-router-dom";
import { ProductVariants } from "../../../modules/types/products";
import ReletedProducts from "./ReletedProducts";
import { fetchReviews } from "../../../redux/actions/reviewActions";
import { setSelectedVariant } from "../../../redux/reducers/productsSlice";

/* Images */
import leftArrow from "../../../assets/images/icons/arrowLeft.png";
import rightArrow from "../../../assets/images/icons/arrowRight.png";
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import basket from "../../../assets/svg/cart.svg";

/* Styles */
import {
  ProductFilter,
  ProductImg,
  ProductNotFound,
  ProductTopContainer,
} from "./styles/ProductTop.styled";

const ProductTop: FC = () => {
  const { singleProduct, productVariants, loading } = useSelector(
    (state: RootState) => state.products
  );
  const [mainImage, setMainImage] = useState<string>("");
  const [imageOrder, setImageOrder] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  /* Product Variant States */
  const [product, setProduct] = useState<ProductVariants | null>();
  const [option_1, setOption_1] = useState<string>("");
  const [option_2, setOption_2] = useState<string>("");

  useEffect(() => {
    setProduct(null);
    setOption_1("");
    setOption_2("");
  }, []);

  //! Reviews Section
  useEffect(() => {
    if (product?.productId === singleProduct?._id) {
      product && dispatch(fetchReviews(product._id));
      product && dispatch(setSelectedVariant(product));
    } else {
      singleProduct && dispatch(fetchReviews(singleProduct?._id));
    }
  }, [product, singleProduct]);

  /* Setting Default Options */
  useEffect(() => {
    if (singleProduct) {
      setOption_1(singleProduct?.variant_groups?.[0]?.options?.[0].name);
      setOption_2(singleProduct?.variant_groups?.[1]?.options?.[0].name);
    }
  }, [singleProduct]);

  /* Selecting Product Option */
  useEffect(() => {
    productVariants?.map((productVariant) => {
      let variantSkuArray = productVariant?.sku?.split(",");

      if (
        variantSkuArray?.includes(option_1) &&
        variantSkuArray?.includes(option_2)
      ) {
        setProduct(productVariant);
      }
    });
    !productVariants && setProduct(null);
    dispatch(setSelectedVariant(null));
  }, [productVariants, option_1, option_2]);

  /* Setting Main Image */
  useEffect(() => {
    productVariants
      ? setMainImage(product?.assets?.[0]?.url)
      : setMainImage(singleProduct?.assets?.[0]?.url);
  }, [singleProduct, product]);

  useEffect(() => {
    productVariants
      ? setMainImage(product?.assets?.[imageOrder]?.url)
      : setMainImage(singleProduct?.assets?.[imageOrder]?.url);
  }, [imageOrder]);

  /* Image Changing */
  const imageChange = (sign: string) => {
    if (sign === "+" && singleProduct?.assets) {
      product
        ? imageOrder >= product?.assets.length - 1
          ? setImageOrder(0)
          : setImageOrder(imageOrder + 1)
        : imageOrder >= singleProduct?.assets.length - 1
        ? setImageOrder(0)
        : setImageOrder(imageOrder + 1);
    } else if (sign === "-" && singleProduct?.assets) {
      product
        ? imageOrder <= 0
          ? setImageOrder(product?.assets.length - 1)
          : setImageOrder(imageOrder - 1)
        : imageOrder <= 0
        ? setImageOrder(singleProduct?.assets.length - 1)
        : setImageOrder(imageOrder - 1);
    }
  };

  /* Add Item To Basket */
  const addingToBasket = () => {
    if (id) {
      product
        ? dispatch(
            addProductToBasket({
              id: id,
              variant_id: product._id,
              quantity: orderCount,
            })
          )
        : dispatch(
            addProductToBasket({
              id: id,
              quantity: orderCount,
            })
          );
    }
    setOrderCount(1);
  };

  if (
    (loading === "failed" &&
      singleProduct === null &&
      productVariants === null) ||
    (loading === "succeeded" &&
      singleProduct === null &&
      productVariants === null)
  ) {
    return (
      <ProductNotFound>
        <h2>Məhsul Tapılmadı</h2>
      </ProductNotFound>
    );
  }

  return (
    <>
      <ProductTopContainer>
        <ProductImg>
          <img
            src={leftArrow}
            onClick={() => imageChange("-")}
            alt="leftArrow"
          />
          {loading === "pending" ? (
            <Skeleton
              variant="rectangular"
              width={250}
              height={300}
              animation="wave"
            />
          ) : (
            <img src={mainImage} alt={singleProduct?.name} />
          )}
          <img
            src={rightArrow}
            onClick={() => imageChange("+")}
            alt="rightArrow"
          />
          <div>
            {loading === "pending" ? (
              <>
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={100}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={100}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={100}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={100}
                  animation="wave"
                />
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={100}
                  animation="wave"
                />
              </>
            ) : productVariants ? (
              product?.assets?.map((image, index) => (
                <img
                  src={image.url}
                  key={image._id}
                  onClick={() => {
                    setMainImage(image.url);
                    setImageOrder(index);
                  }}
                  alt={image.filename}
                  className={`${mainImage === image.url && "active"}`}
                />
              ))
            ) : (
              singleProduct?.assets?.map((image, index) => (
                <img
                  src={image.url}
                  key={image._id}
                  onClick={() => {
                    setMainImage(image.url);
                    setImageOrder(index);
                  }}
                  alt={image.filename}
                  className={`${mainImage === image.url && "active"}`}
                />
              ))
            )}
          </div>
        </ProductImg>
        <ProductFilter>
          {loading === "pending" ? (
            <Skeleton variant="text" animation="wave" width={200} height={40} />
          ) : (
            <h2>
              {productVariants ? product?.description : singleProduct?.name}
            </h2>
          )}
          <div style={{ transform: "translateX(-5px)" }}>
            <Rating
              name="read-only"
              value={
                product
                  ? Math.round(product?.ratingsAverage)
                  : Math.round(singleProduct?.ratingsAverage || 0)
              }
              readOnly
            />
            |{" "}
            {product
              ? Math.ceil(product?.ratingsQuantity || 0)
              : Math.ceil(singleProduct?.ratingsQuantity || 0)}{" "}
            rəy
          </div>
          {loading === "pending" ? (
            <Skeleton
              variant="text"
              style={{ margin: "20px 0" }}
              animation="wave"
              width={100}
              height={30}
            />
          ) : (
            <p>
              {/* <del>200</del> */}
              <span>
                {productVariants
                  ? product?.price?.formatted_with_code
                  : singleProduct?.price.formatted_with_code}
              </span>
            </p>
          )}
          {loading === "pending" ? (
            <>
              <Skeleton
                variant="text"
                animation="wave"
                width={200}
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={200}
                height={30}
              />
            </>
          ) : (
            singleProduct?.variant_groups?.map((variant) => (
              <div key={variant.name}>
                <p>{variant.name.toUpperCase()}:</p>
                {variant.name !== "rəng" ? (
                  <ul>
                    {variant.options?.map((option: any) => (
                      <li
                        className={`${
                          option_1 === option.name ? "active" : ""
                        }`}
                        key={option.name}
                        onClick={() => setOption_1(option.name)}
                      >
                        {option.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    {variant.options.map((option: any) => (
                      <li
                        className={`${
                          option_2 === option.name ? "active" : ""
                        }`}
                        key={option.name}
                        onClick={() => setOption_2(option.name)}
                      >
                        <span style={{ background: option.name }}></span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
          {loading === "pending" ? (
            <Skeleton
              variant="text"
              style={{ marginTop: "20px" }}
              animation="wave"
              width={200}
              height={30}
            />
          ) : (
            <div className="quantity">
              <p style={{ marginRight: "30px" }}>MIQDAR:</p>
              <div
                onClick={() => {
                  orderCount > 1 && setOrderCount(orderCount - 1);
                }}
              >
                <img src={minus} alt="minus" />
              </div>
              <span>{orderCount}</span>
              <div
                onClick={() => {
                  setOrderCount(orderCount + 1);
                }}
              >
                <img src={plus} alt="plus" />
              </div>
            </div>
          )}
          {loading === "pending" ? (
            <Skeleton
              variant="text"
              style={{ marginTop: "20px" }}
              animation="wave"
              width={200}
              height={100}
            />
          ) : (
            <button onClick={() => addingToBasket()}>
              <img src={basket} alt="basket" />
              <p>Səbətə at</p>
            </button>
          )}
        </ProductFilter>
      </ProductTopContainer>
      <ReletedProducts />
    </>
  );
};

export default ProductTop;
