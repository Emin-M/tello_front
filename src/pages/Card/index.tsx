import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import Cards from "./components/Cards";
import EmptyCard from "./components/EmptyCard";
import { CardContainer, CardTop } from "./style";

const Card: FC = () => {
  const { items } = useSelector((state: RootState) => state.card);

  return (
    <CardContainer>
      <Container>
        <CardTop>
          <h2>Səbət (0 məhsul)</h2>
        </CardTop>
        {items && items.total_items > 0 ? <Cards /> : <EmptyCard />}
      </Container>
    </CardContainer>
  );
};

export default Card;
