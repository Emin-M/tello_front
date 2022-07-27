import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import Cards from "./components/Cards";
import EmptyCard from "./components/EmptyCard";
import { CardContainer, CardTop } from "./style";
import { Skeleton } from "@mui/material";

const Card: FC = () => {
  const { items, loading } = useSelector((state: RootState) => state.card);

  return (
    <CardContainer>
      <Container>
        <CardTop>
          <h2>Səbət ({items?.total_items || "0"} məhsul)</h2>
        </CardTop>
        {loading === "pending" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflowX: "hidden",
            }}
          >
            <Skeleton
              animation="wave"
              width={1500}
              height={150}
              variant="text"
            />
            <Skeleton
              animation="wave"
              width={1500}
              height={150}
              variant="text"
            />
          </div>
        ) : items && items.total_items > 0 ? (
          <Cards />
        ) : (
          <EmptyCard />
        )}
      </Container>
    </CardContainer>
  );
};

export default Card;
