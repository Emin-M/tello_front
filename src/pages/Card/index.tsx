import React from "react";
import { Container } from "../ReusuableComponents/styles/Container.styled";
import Cards from "./components/Cards";
import EmptyCard from "./components/EmptyCard";
import { CardContainer, CardTop } from "./style";

const Card = () => {
  return (
    <CardContainer>
      <Container>
        <CardTop>
          <h2>Səbət (0 məhsul)</h2>
        </CardTop>
        {/* <EmptyCard /> */}
        <Cards />
      </Container>
    </CardContainer>
  );
};

export default Card;
