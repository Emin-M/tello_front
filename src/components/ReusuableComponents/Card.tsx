import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { updateFavorite } from "../../redux/reducers/favoritesSlice";
import { StyledCard } from "./styles/Card.styled";
import { IProduct } from "../../modules/types/products";

/* images */
import heart from "../../assets/images/icons/heart.png";
import heartFull from "../../assets/images/icons/heartFull.png";

const Card = ({
  product,
  sku,
  target,
}: {
  product: any;
  sku?: string;
  target?: string;
}) => {
  const { favs } = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch<AppDispatch>();
  const [check, setCheck] = useState<boolean>(false);
  const id = product?.product_id ? product?.product_id : product._id;

  useEffect(() => {
    favs?.find((fav: IProduct) => fav._id === product._id)
      ? setCheck(true)
      : setCheck(false);
  }, [favs]);

  return (
    <StyledCard>
      <div onClick={() => dispatch(updateFavorite(product))}>
        {check ? (
          <img src={heartFull} alt="heartFull" />
        ) : (
          <img src={heart} alt="heart" />
        )}
      </div>

      <Link to={`/product/params/${id}`} target={target}>
        <img src={product?.image?.url} alt={product?.name} />
        <h3>{sku ? sku : product?.name}</h3>
        <p>
          {/* <del>200</del> */}
          <span>{product?.price?.formatted_with_code}</span>
        </p>
      </Link>
    </StyledCard>
  );
};

export default Card;
