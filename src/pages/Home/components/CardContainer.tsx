import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../ReusuableComponents/Card";
import { Container } from "../../ReusuableComponents/styles/Container.styled";
import { CardBottom, Cards, CardTop } from "../styles/CardContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";
import Loading from "../../ReusuableComponents/Loading";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";

interface Props {
  title: string;
  link: string;
}

const CardContainer = ({ title, link }: Props) => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  console.log(products);

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
          {loading ? (
            <Loading />
          ) : (
            products
              ?.slice(0, 4)
              .map((product: IProduct) => (
                <Card key={product.id} product={product} />
              ))
          )}
        </CardBottom>
      </Cards>
    </Container>
  );
};

export default CardContainer;
