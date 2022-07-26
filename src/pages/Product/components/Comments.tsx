import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../../components/ReusuableComponents/styles/Container.styled";
import {
  CommentsBottom,
  CommentsComment,
  CommentsCommentContainer,
  CommentsContainer,
  CommentsStar,
  CommentsTop,
  FormContainer,
} from "./styles/Comments.styled";

/* Images */
import star_full from "../../../assets/images/icons/star_full.png";
import star from "../../../assets/images/icons/star.png";
import Button from "../../../components/ReusuableComponents/Button";

const Comments: FC = () => {
  const { id } = useParams();

  return (
    <CommentsContainer>
      <Container>
        <CommentsTop>
          <div>
            <Link to={`/product/params/${id}`}>Texniki Xüsusiyyətləri</Link>
            <Link to={`/product/comments/${id}`}>Rəylər</Link>
          </div>
        </CommentsTop>
        <CommentsBottom>
          <CommentsCommentContainer>
            <CommentsStar>
              <h2>4</h2>
              <div>
                <img src={star_full} alt="star" />
                <img src={star_full} alt="star" />
                <img src={star_full} alt="star" />
                <img src={star_full} alt="star" />
                <img src={star} alt="star" />
              </div>
            </CommentsStar>
            <CommentsComment>
              <div>
                <h2>Gunel Mammadova</h2>
                <p>5 gün əvvəl</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit
                nibh tortor sit. Consectetur sit auctor odio quis suspendisse
                tincidunt quis. Et tristique amet aenean nibh porttitor quis
                aliquam integer. Consectetur lacus, volutpat malesuada libero.
                Sollicitudin libero pharetra a.
              </p>
            </CommentsComment>
          </CommentsCommentContainer>
          <CommentsCommentContainer>
            <CommentsStar>
              <h2>4</h2>
              <div>
                <img src={star_full} alt="star" />
                <img src={star_full} alt="star" />
                <img src={star_full} alt="star" />
                <img src={star_full} alt="star" />
                <img src={star} alt="star" />
              </div>
            </CommentsStar>
            <CommentsComment>
              <div>
                <h2>Gunel Mammadova</h2>
                <p>5 gün əvvəl</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit
                nibh tortor sit. Consectetur sit auctor odio quis suspendisse
                tincidunt quis. Et tristique amet aenean nibh porttitor quis
                aliquam integer. Consectetur lacus, volutpat malesuada libero.
                Sollicitudin libero pharetra a.
              </p>
            </CommentsComment>
          </CommentsCommentContainer>
          <FormContainer>
            <Container>
              <h2>Rəy Bildir</h2>
              <div>
                <div className="form-group">
                  <label htmlFor="">Ad</label>
                  <input type="text" placeholder="Adınızı daxil edin" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Soyad</label>
                  <input type="text" placeholder="Soyadınızı daxil edin" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Rəy bildirdiyiniz məhsulu seçin</label>
                <select id="">
                  <option value="1">Məhsulu seçin</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Rəyinizi yazın</label>
                <textarea placeholder="Rətinizi buraya yazın"></textarea>
              </div>
              <Button title="Rəyini bildir" bg="#2DD06E" color="#ffffff" />
            </Container>
          </FormContainer>
        </CommentsBottom>
      </Container>
    </CommentsContainer>
  );
};

export default Comments;
