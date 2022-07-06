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
`;
