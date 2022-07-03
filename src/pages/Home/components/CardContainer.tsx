import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../ReusuableComponents/Card";
import { Container } from "../../ReusuableComponents/styles/Container.styled";
import { CardBottom, Cards, CardTop } from "./styles/CardContainer.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";
import Loading from "../../ReusuableComponents/Loading";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";
import { Skeleton } from "@mui/material";

interface Props {
  title: string;
  link: string;
}

const CardContainer = ({ title, link }: Props) => {
  const { allProducts, loading } = useSelector(
    (state: RootState) => state.products
  );

  console.log(allProducts);

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
            <div
              style={{
                display: "flex",
                gap: "22px",
                width: "100%",
              }}
            >
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={350}
                height={305}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={350}
                height={305}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={350}
                height={305}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={350}
                height={305}
              />
            </div>
          ) : (
            allProducts
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
