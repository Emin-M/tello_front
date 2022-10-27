import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../../components/ReusuableComponents/styles/Container.styled";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  CommentsBottom,
  CommentsComment,
  CommentsCommentContainer,
  CommentsContainer,
  CommentsStar,
  CommentsTop,
  FormContainer,
} from "./styles/Comments.styled";
import { Rating, Typography } from "@mui/material";
import {
  deleteReview,
  fetchReviews,
  postReview,
} from "../../../redux/actions/reviewActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatDate } from "../../../utils/dateFormat";

const Comments: FC = () => {
  const { singleProduct, selectedVariant, loading } = useSelector(
    (state: RootState) => state.products
  );
  const { reviews, review_loading } = useSelector(
    (state: RootState) => state.reviews
  );
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedin } = useSelector((state: RootState) => state.user);
  const { id } = useParams();
  const [starValue, setStarValue] = useState<any>(0);
  const [reviewContent, setReviewContent] = useState<string>();

  if (
    (loading === "failed" && singleProduct === null) ||
    (loading === "succeeded" && singleProduct === null)
  ) {
    return <></>;
  }

  const createReview = () => {
    dispatch(
      postReview({
        content: reviewContent,
        rating: starValue,
        product_id: !selectedVariant?._id ? singleProduct?._id : undefined,
        variant_id: selectedVariant?._id,
      })
    );
    setTimeout(() => {
      selectedVariant?._id
        ? dispatch(fetchReviews(selectedVariant?._id))
        : singleProduct?._id && dispatch(fetchReviews(singleProduct?._id));
      setStarValue(0);
      setReviewContent("");
    }, 1000);
  };

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
          {reviews?.map((review: any) => (
            <CommentsCommentContainer key={review?._id}>
              <CommentsStar>
                <h2>{review.rating}</h2>
                <div>
                  <Rating name="read-only" value={review.rating} readOnly />
                </div>
              </CommentsStar>
              <CommentsComment>
                <div>
                  <h2>
                    {review?.user?.firstname + " " + review?.user?.lastname}
                  </h2>
                  <p>{formatDate(new Date(review?.createdAt))}</p>
                </div>
                <p>{review?.content ? review?.content : "-- məzmun yoxdur"}</p>
              </CommentsComment>
              {user?._id === review?.user?._id && (
                <div
                  className="trash"
                  onClick={() => {
                    dispatch(
                      deleteReview({
                        productId: singleProduct?._id && singleProduct?._id,
                        reviewId: review._id,
                      })
                    );
                    setTimeout(() => {
                      selectedVariant?._id
                        ? dispatch(fetchReviews(selectedVariant?._id))
                        : singleProduct?._id &&
                          dispatch(fetchReviews(singleProduct?._id));
                    }, 1000);
                  }}
                >
                  <DeleteIcon />
                </div>
              )}
            </CommentsCommentContainer>
          ))}
          {!reviews?.[0] && (
            <CommentsCommentContainer>
              <h3
                style={{ textAlign: "center", width: "100%", color: "#2dd06e" }}
              >
                ------------------------------------- * Rəy yoxdur *
                -------------------------------------
              </h3>
            </CommentsCommentContainer>
          )}
          <FormContainer>
            {isLoggedin ? (
              <Container>
                <h2>Rəy Bildir</h2>
                <div className="star">
                  <Typography component="legend">
                    Mehsulu Qiymətləndirin *
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={starValue}
                    onChange={(event, newValue) => {
                      setStarValue(newValue);
                    }}
                    size="large"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Rəyinizi yazın</label>
                  <textarea
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                    placeholder="Rəyinizi buraya yazın"
                  ></textarea>
                </div>
                {starValue > 0 ? (
                  <button
                    style={{
                      outline: "none",
                      border: "1px solid #2dd06e",
                      borderRadius: "8px",
                      width: "156px",
                      height: "48px",
                      color: "#ffffff",
                      background: "#2DD06E",
                    }}
                    onClick={() => createReview()}
                  >
                    Rəyini bildir
                  </button>
                ) : (
                  <button
                    style={{
                      outline: "none",
                      border: "1px solid #2dd06e",
                      borderRadius: "8px",
                      width: "156px",
                      height: "48px",
                      color: "#ffffff",
                      background: "#000000",
                      pointerEvents: "none",
                    }}
                  >
                    Rəyini bildir
                  </button>
                )}
              </Container>
            ) : (
              <div className="notLoggedin">
                Rəy bildirmək üçün hesaba daxil olun
              </div>
            )}
          </FormContainer>
        </CommentsBottom>
      </Container>
    </CommentsContainer>
  );
};

export default Comments;
