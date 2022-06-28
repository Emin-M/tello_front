import React from "react";
import { StyledCard } from "../styles/Card.styled";

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
  console.log(product);

  return (
    <StyledCard>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        <del>200</del>$<span>{product.price}</span>$
      </p>
    </StyledCard>
  );
};

export default Card;
