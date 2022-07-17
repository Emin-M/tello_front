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
        {loading ? (
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "hidden",
            }}
          >
            <div>
              <Skeleton
                animation="wave"
                width={1000}
                height={150}
                variant="text"
              />
              <Skeleton
                animation="wave"
                width={1000}
                height={150}
                variant="text"
              />
            </div>
            <Skeleton
              animation="wave"
              width={400}
              height={300}
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
