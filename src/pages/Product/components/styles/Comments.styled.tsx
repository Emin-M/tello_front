import styled from "styled-components";

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsTop = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 16px;

  div {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }

  a {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    cursor: pointer;
  }

  a:nth-child(1) {
    color: #bdbdbd;
  }

  @media (max-width: 650px) {
    margin-top: 50px;

    div {
      width: 100%;
    }
  }
`;

export const CommentsBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsCommentContainer = styled.div`
  display: flex;
  padding: 40px 0;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CommentsStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #bdbdbd;

  h2 {
    font-weight: 300;
    font-size: 72px;
    line-height: 91px;
    color: #000000;
    margin-bottom: 40px;
  }

  @media (max-width: 650px) {
    margin-bottom: 20px;
    border-right: none;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
  }
`;

export const CommentsComment = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 0 40px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
  }

  @media (max-width: 650px) {
    padding: 0;

    div {
      justify-content: center;

      p {
        display: none;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  padding-bottom: 150px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  > div > div:nth-child(2) {
    display: flex;
    gap: 30px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex: 1;

    label {
      font-size: 16px;
      line-height: 22px;
      color: #4f4f4f;
      margin-bottom: 8px;
    }

    input,
    select,
    textarea {
      background: #f2f2f2;
      border-radius: 8px;
      outline: none;
      border: none;
      height: 50px;
      width: 100%;
      padding: 10px;
      font-size: 15px;
    }

    textarea {
      width: 100%;
      height: 144px;
    }
  }

  button {
    align-self: flex-end;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background: #333333 !important;
    }
  }

  @media (max-width: 650px) {
    > div > div:nth-child(2) {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
`;
