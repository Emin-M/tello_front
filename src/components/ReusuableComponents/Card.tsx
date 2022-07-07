import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "./styles/Card.styled";
import heart from "../../assets/images/icons/heart.png";

const Card = ({ product }: any) => {
  return (
    <StyledCard>
      <Link to={`/product/params/${product?.id}`}>
        <div>
          <img src={heart} alt="heart" />
        </div>
        <img src={product?.image?.url} alt={product?.name} />
        <h3>{product?.name}</h3>
        <p>
          {/* <del>200</del> */}
          <span>{product?.price?.formatted_with_code}</span>
        </p>
      </Link>
    </StyledCard>
  );
};

export default Card;
