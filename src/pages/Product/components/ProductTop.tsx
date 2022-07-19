import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { Skeleton } from "@mui/material";
import { addProductToBasket } from "../../../redux/actions/cardActions";
import { useParams } from "react-router-dom";
import { ProductVariants } from "../../../modules/types/products";

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
  ProductTopContainer,
} from "./styles/ProductTop.styled";

const ProductTop: FC = () => {
  const { singleProduct, productVariants, loading } = useSelector(
    (state: RootState) => state.products
  );
  const [mainImage, setMainImage] = useState<string>();
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
  }, [loading]);

  /* Setting Default Options */
  useEffect(() => {
    if (singleProduct) {
      setOption_1(singleProduct?.variant_groups?.[0]?.options?.[0].name);
      setOption_2(singleProduct?.variant_groups?.[1]?.options?.[0].name);
    }
  }, [productVariants]);

  /* Selecting Product Option */
  useEffect(() => {
    productVariants?.map((productVariant) => {
      let variantSkuArray = productVariant?.sku?.split(",");
      if (
        variantSkuArray?.includes(option_1.toUpperCase()) &&
        variantSkuArray?.includes(option_2)
      ) {
        setProduct(productVariant);
      }
    });
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
              variant_id: product.id,
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
  };

  return (
    <ProductTopContainer>
      <ProductImg>
        <img src={leftArrow} onClick={() => imageChange("-")} alt="leftArrow" />
        {loading ? (
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
          {loading ? (
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
                key={image.id}
                onClick={() => {
                  setMainImage(image.url);
                  setImageOrder(index);
                }}
                alt={image.filename}
              />
            ))
          ) : (
            singleProduct?.assets?.map((image, index) => (
              <img
                src={image.url}
                key={image.id}
                onClick={() => {
                  setMainImage(image.url);
                  setImageOrder(index);
                }}
                alt={image.filename}
              />
            ))
          )}
        </div>
      </ProductImg>
      <ProductFilter>
        {loading ? (
          <Skeleton variant="text" animation="wave" width={200} height={30} />
        ) : (
          <h2>
            {productVariants ? product?.description : singleProduct?.name}
          </h2>
        )}
        <p>
          {/* <del>200</del> */}
          <span>
            {productVariants
              ? product?.price?.formatted_with_code
              : singleProduct?.price.formatted_with_code}
          </span>
        </p>
        {loading ? (
          <>
            <Skeleton variant="text" animation="wave" width={200} height={30} />
            <Skeleton variant="text" animation="wave" width={200} height={30} />
          </>
        ) : (
          singleProduct?.variant_groups?.map((variant) => (
            <div key={variant.name}>
              <p>{variant.name.toUpperCase()}:</p>
              {variant.name !== "color" ? (
                <ul>
                  {variant.options?.map((option: any) => (
                    <li
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
                      key={option.name}
                      onClick={() => setOption_2(option.name)}
                      style={{ background: option.name }}
                    ></li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
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
        <button onClick={() => addingToBasket()}>
          <img src={basket} alt="basket" />
          <p>Səbətə at</p>
        </button>
      </ProductFilter>
    </ProductTopContainer>
  );
};

export default ProductTop;
