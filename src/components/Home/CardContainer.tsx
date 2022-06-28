import React from "react";
import { Link } from "react-router-dom";
import Card from "../ReusuableComponents/Card";
import { Container } from "../styles/Container.styled";
import { CardBottom, Cards, CardTop } from "./Styles/CardContainer";

/* Images */
import arrowRight from "../../assets/images/icons/arrowRight.png";

interface IProducts {
  id: number;
  img: string;
  name: string;
  price: number;
}

interface Props {
  title: string;
  link: string;
  products: IProducts[];
}

const CardContainer = ({ title, link, products }: Props) => {
  return (
    <Container>
      <Cards>
        <CardTop>
          <h2>{title}</h2>
          <Link to={link}>
            Hamısına bax <img src={arrowRight} alt="arrowRight" />
          </Link>
        </CardTop>
        <CardBottom>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </CardBottom>
      </Cards>
    </Container>
  );
};

export default CardContainer;
