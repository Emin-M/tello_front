import { Link } from "react-router-dom";
import { StyledCard } from "./styles/Card.styled";
import heart from "../../assets/images/icons/heart.png";

const Card = ({ product, target }: { product: any; target?: string }) => {
  return (
    <StyledCard>
      <Link to={`/product/params/${product?.id}`} target={target}>
        {/* <div>
          <img src={heart} alt="heart" />
        </div> */}
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
