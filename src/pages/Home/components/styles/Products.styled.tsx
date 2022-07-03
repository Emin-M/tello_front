import styled from "styled-components";

export const ProductContainer = styled.div`
  margin-top: 100px;

  > div {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 350px 350px;
    gap: 16px;
  }

  > div > div:nth-child(1) {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }

  > div > div:nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  > div > div:nth-child(3) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  @media (max-width: 650px) {
    > div {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 400px 200px 200px;
      gap: 16px;
    }

    > div > div:nth-child(1) {
      grid-row: 1 / 2;
      grid-column: 1 / 1;
    }

    > div > div:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / 1;
    }

    > div > div:nth-child(3) {
      grid-row: 3 / 4;
      grid-column: 1 / 1;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  background: #ff6e7f;
  background: -webkit-linear-gradient(to left, #f2f2f2, #f2e4dc);
  background: linear-gradient(to left, #f2f2f2, #f2e4dc);
  border-radius: 8px;

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #303030;
    margin-bottom: 16px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #303030;
    margin-bottom: 24px;
  }

  a {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #3366ff;

    img {
      margin-left: 10px;
    }
  }

  > img {
    position: absolute;
    right: 30px;
    bottom: 0;
  }

  @media (max-width: 650px) {
    h2 {
      font-weight: 600;
      font-size: 13.2973px;
      line-height: 18px;
      margin-bottom: 9px;
    }

    p {
      font-size: 8.86487px;
      line-height: 13px;
      margin-bottom: 13px;
    }

    a {
      font-size: 8.86487px;
      line-height: 13px;

      img {
        margin-left: 10px;
      }
    }
    > img {
      right: 0;
    }
  }
`;
