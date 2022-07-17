import styled from "styled-components";

export const CardsStyled = styled.div`
  display: flex;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    flex: 4;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    > div:nth-child(1) {
      padding-top: 0;
    }
  }
`;

export const SingleCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  margin-bottom: 32px;
  margin-right: 32px;
  border-radius: 8px;
  padding: 16px;

  > img {
    width: 75px;
    height: 90%;
  }

  > img:nth-child(4) {
    width: 18px;
    height: 20px;
    cursor: pointer;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
  }

  .about {
    > div {
      display: flex;
      margin-top: 12px;
    }

    p {
      margin-right: 20px;
    }

    span {
      margin-right: 10px;
    }
  }

  .quantity {
    display: flex;
    margin-right: 10px;

    img {
      cursor: pointer;
    }

    span {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #1d2123;
      margin: 0 35px;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    margin-right: 0;
    position: relative;

    > img {
      width: auto;
      height: auto;
    }

    > img:nth-child(4) {
      position: absolute;
      top: 24px;
      right: 24px;
    }

    .about {
      > div {
        flex-direction: column;
      }

      p {
        margin-right: 10px;
        margin-bottom: 10px;
      }

      span {
        margin-right: 5px;
      }
    }

    .quantity {
      position: absolute;
      bottom: 40px;
      right: 24px;
    }
  }
`;

export const CardTotal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
  flex: 1;
  background: #ffffff;
  padding: 32px 24px;
  border-radius: 16px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #1d2123;
    margin-bottom: 16px;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 16px;
  }

  p:nth-child(4) {
    border-top: 1px solid black;
    padding-top: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1d2123;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
