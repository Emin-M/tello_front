import styled from "styled-components";

export const CardsStyled = styled.div`
  display: flex;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    flex: 4;
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;

    > div:nth-child(1) {
      padding-top: 0;
    }
  }
`;

export const SingleCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--white);
  margin-bottom: 32px;
  margin-right: 32px;
  border-radius: 8px;
  padding: 16px 50px;

  @media (max-width: 1100px) {
    padding: 16px;
  }

  .img {
    flex: 1;

    a {
      display: block;
    }
  }

  a > img {
    width: 75px;
    height: 90%;
  }

  > .delete {
    width: 18px;
    height: 20px;
    cursor: pointer;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: var(--gray-100);
  }

  .about {
    flex: 2;

    a {
      align-self: flex-start;
      color: inherit;
    }

    a > div {
      display: flex;
      margin-top: 12px;
    }

    p {
      margin-right: 20px;

      span {
        margin-right: 10px;
      }
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    height: 40px;
    flex: 1;
    margin-right: 10px;

    img {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    span {
      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #1d2123;
        margin: 0 35px;
      }
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    margin-right: 0;
    position: relative;

    .img {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    a > img {
      width: 80%;
      height: 80%;
    }

    > .delete {
      position: absolute;
      top: 24px;
      right: 24px;
    }

    .about {
      margin-top: 20px;
      align-self: flex-start;

      a > div {
        flex-direction: column;
      }

      p {
        margin-right: 10px;
        margin-bottom: 10px;

        span:nth-child(1) {
          display: none;
        }

        span {
          margin-right: 5px;
        }
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 20px;
      right: 24px;
      height: 40px;
      width: 125px;
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 250px;

  button {
    margin-top: 20px;
    outline: none;
    border: 1px solid var(--primary-100);
    border-radius: 8px;
    width: 100%;
    height: 48px;
    background: var(--white);
    transition: all 0.3s;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background: var(--primary-100);
      color: var(--white);
    }
  }

  @media (max-width: 850px) {
    margin-bottom: 20px;

    button {
      margin-top: 0;
      margin-bottom: 30px;
    }
  }
`;

export const CardTotal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  background: var(--white);
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
    color: var(--gray-100);
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

  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
