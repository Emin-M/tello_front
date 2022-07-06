import { FC, useEffect, useState } from "react";
import {
  ProductFilter,
  ProductImg,
  ProductTopContainer,
} from "./styles/ProductTop.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

/* Images */
import leftArrow from "../../../assets/images/icons/arrowLeft.png";
import rightArrow from "../../../assets/images/icons/arrowRight.png";
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import basket from "../../../assets/svg/cart.svg";
import { Skeleton } from "@mui/material";

const ProductTop: FC = () => {
  const { singleProduct, loading } = useSelector(
    (state: RootState) => state.products
  );
  const [mainImage, setMainImage] = useState<string>();
  const [imageOrder, setImageOrder] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(1);

  console.log(singleProduct);

  useEffect(() => {
    setMainImage(singleProduct?.assets?.[imageOrder]?.url);
  }, [singleProduct, imageOrder]);

  const imageChange = (sign: string) => {
    if (sign === "+" && singleProduct?.assets) {
      imageOrder >= singleProduct?.assets.length - 1
        ? setImageOrder(0)
        : setImageOrder(imageOrder + 1);
    } else if (sign === "-" && singleProduct?.assets) {
      imageOrder <= 0
        ? setImageOrder(singleProduct?.assets.length - 1)
        : setImageOrder(imageOrder - 1);
    }
  };

  return (
    <ProductTopContainer>
      <ProductImg>
        <img src={leftArrow} onClick={() => imageChange("-")} alt="leftArrow" />
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={300}
            height={400}
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
          <h2>{singleProduct?.name}</h2>
        )}
        <p>
          {/* <del>200</del> */}
          <span>{singleProduct?.price?.formatted_with_code}</span>
        </p>
        {singleProduct?.variant_groups?.map((variant) => (
          <div key={variant.name}>
            <p>{variant.name.toUpperCase()}:</p>
            {variant.name !== "color" ? (
              <ul>
                {variant.options?.map((option: any) => (
                  <li key={option.name}>{option.name}</li>
                ))}
              </ul>
            ) : (
              <ul>
                {variant.options.map((option: any) => (
                  <li
                    key={option.name}
                    style={{ background: option.name }}
                  ></li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="quantity">
          <img
            src={minus}
            alt="minus"
            onClick={() => {
              orderCount > 1 && setOrderCount(orderCount - 1);
            }}
          />
          <span>{orderCount}</span>
          <img
            src={plus}
            alt="plus"
            onClick={() => {
              setOrderCount(orderCount + 1);
            }}
          />
        </div>
        <button>
          <img src={basket} alt="basket" /> <p>Səbətə at</p>
        </button>
      </ProductFilter>
    </ProductTopContainer>
  );
};

export default ProductTop;
