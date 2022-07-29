import { Link } from "react-router-dom";
import Card from "../../../components/ReusuableComponents/Card";
import { Container } from "../../../components/ReusuableComponents/styles/Container.styled";
import { CardBottom, Cards, CardTop } from "./styles/CardContainer.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IProduct } from "../../../modules/types/products";

/* Images */
import arrowRight from "../../../assets/images/icons/arrowRight.png";
import { Skeleton } from "@mui/material";

interface Props {
  data?: IProduct[];
  title: string;
  link: string;
}

const CardContainer = ({ data, title, link }: Props) => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  let target = "_self";
  let width = window.innerWidth;
  width > 700 && (target = "_blank");

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
          {loading === "pending" ? (
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
                width="25%"
                height={300}
                className="skeleton_home"
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="25%"
                height={300}
                className="skeleton_home skeleton_home_res"
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="25%"
                height={300}
                className="skeleton_home  skeleton_home_res"
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="25%"
                height={300}
                className="skeleton_home skeleton_home_res"
              />
            </div>
          ) : data ? (
            data
              ?.slice(0, 4)
              .map((product: IProduct) => (
                <Card key={product.id} product={product} target={target} />
              ))
          ) : (
            products
              ?.slice(0, 4)
              .map((product: IProduct) => (
                <Card key={product.id} product={product} target={target} />
              ))
          )}
        </CardBottom>
      </Cards>
    </Container>
  );
};

export default CardContainer;
