import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ReusuableComponents/Button";
import { EmptyCardStyled } from "./styles/EmptyCard.styled";

/* Images */
import shoppingCard from "../../../assets/svg/shopping-cart.svg";

const EmptyCard = () => {
  return (
    <EmptyCardStyled>
      <img src={shoppingCard} alt="shoppingCard" />
      <p>Səbətiniz halhazırda boşdur</p>
      <Link to="/products/telefonlar">
        <Button title="Alış-verişə davam et" bg="#2dd06e" color="#ffffff" />
      </Link>
    </EmptyCardStyled>
  );
};

export default EmptyCard;
