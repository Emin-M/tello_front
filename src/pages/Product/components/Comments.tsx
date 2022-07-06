import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CommentsBottom,
  CommentsContainer,
  CommentsTop,
} from "./styles/Comments.styled";

const Comments: FC = () => {
  const { id } = useParams();

  return (
    <CommentsContainer>
      <CommentsTop>
        <div>
          <Link to={`/product/params/${id}`}>Texniki Xüsusiyyətləri</Link>
          <Link to={`/product/comments/${id}`}>Rəylər</Link>
        </div>
      </CommentsTop>
      <CommentsBottom></CommentsBottom>
    </CommentsContainer>
  );
};

export default Comments;
