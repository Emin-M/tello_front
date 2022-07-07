import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BottomLeft,
  BottomRight,
  ParamsBottom,
  ParamsContainer,
  ParamsTop,
} from "./styles/Params.styled";

const Params: FC = () => {
  const { id } = useParams();

  return (
    <ParamsContainer>
      <ParamsTop>
        <div>
          <Link to={`/product/params/${id}`}>Texniki Xüsusiyyətləri</Link>
          <Link to={`/product/comments/${id}`}>Rəylər</Link>
        </div>
      </ParamsTop>
      <ParamsBottom>
        <BottomLeft>
          <h2>Əsas göstəricilər</h2>
          <div>
            <div>
              <ul>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
              </ul>
              <ul>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
              </ul>
            </div>
          </div>
          <h2>Əsas göstəricilər</h2>
          <div>
            <div>
              <ul>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
              </ul>
              <ul>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
              </ul>
            </div>
          </div>
          <h2>Əsas göstəricilər</h2>
          <div>
            <div>
              <ul>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
                <li>İstehsalçı</li>
              </ul>
              <ul>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
                <li>Apple</li>
              </ul>
            </div>
          </div>
        </BottomLeft>
        <BottomRight>
          <h2>Məhsul haqqında</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, rem corporis eveniet sint delectus, reiciendis totam
            laboriosam quo perspiciatis ex officiis autem non praesentium
            molestiae. Ipsum excepturi sequi itaque quia, iste sunt delectus in
            provident labore officiis possimus cum, dolorum soluta nam
            consectetur, aut nulla officia totam sint enim harum!
          </p>
        </BottomRight>
      </ParamsBottom>
    </ParamsContainer>
  );
};

export default Params;
