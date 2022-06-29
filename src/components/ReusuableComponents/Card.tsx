import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "../styles/Card.styled";
import heart from "../../assets/images/icons/heart.png";

interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
}

interface Props {
  product: IProduct;
}

const Card = ({ product }: Props) => {
  return (
    <StyledCard>
      <Link to={`products/${product.id}`}>
        <div>
          <img src={heart} alt="heart" />
        </div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>
          <del>200</del>$<span>{product.price}</span>$
        </p>
      </Link>
    </StyledCard>
  );
};

export default Card;
