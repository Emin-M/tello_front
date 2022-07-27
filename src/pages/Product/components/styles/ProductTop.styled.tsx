import styled from "styled-components";

export const ProductTopContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 200px);
  padding: 10px 0;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-top: 50px;
  }
`;

export const ProductImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  flex: 1;
  position: relative;

  img:nth-child(2) {
    height: 100%;
    width: 60%;
  }

  img:nth-child(odd) {
    width: 10px;
    height: 18px;
    cursor: pointer;
  }

  > div {
    position: absolute;
    top: 100%;
    left: 36px;
    display: flex;
    gap: 32px;
    overflow-x: scroll;
    width: 90%;
    padding-top: 30px;

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-x: scroll;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    > img {
      width: 100px !important;
      height: 100px !important;
      cursor: pointer;
      padding: 20px;
      border-radius: 8px;
    }

    .active {
      padding: 5px;
      border: 1px solid #2dd06e;
    }
  }

  @media (max-width: 850px) {
    > div {
      left: 0;
    }
  }
`;

export const ProductFilter = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  padding: 0 50px;
  width: 100%;
  position: relative;

  h2 {
    font-weight: 600;
    font-size: 202x;
    line-height: 32px;
    color: #333333;
  }

  del {
    color: #828282;
    margin-right: 20px;
  }

  > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #db2c66;
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
  }

  div > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4f4f4f;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    margin-left: 22px;
  }

  > div:nth-child(4) {
    padding: 25px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;

      span {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    .active {
      border: 1px solid #2dd06e;
    }
  }

  > div:nth-child(3) {
    padding: 25px 0;
    border-bottom: 1px solid #e0e0e0;

    li {
      padding: 10px 14px;
      background: #f2f2f2;
      border-radius: 8px;
      color: #4f4f4f;
      cursor: pointer;
    }

    .active {
      background: #4f4f4f !important;
      color: #ffffff;
    }
  }

  .quantity {
    padding: 28px 0;

    img {
      padding: 10px;
      border-radius: 50%;
      background: #f2f2f2;
      cursor: pointer;
    }

    span {
      margin: 0 32px;
      font-size: 20px;
      line-height: 24px;
      color: #1d2123;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 197px;
    height: 48px;
    background: #2dd06e;
    border-radius: 8px;
    color: #ffffff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 25px;

    &:hover {
      background: #333333;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      margin-left: 16px;
    }
  }

  @media (max-width: 850px) {
    margin-top: 200px;
    padding: 0;

    button {
      position: absolute;
      width: 50%;
      top: 40px;
      right: 0;
    }
  }
`;

export const ProductNotFound = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 128px);
  margin-top: 128px;

  h2 {
    font-size: 18px;
    line-height: 26px;
    color: #bdbdbd;
    padding-top: 100px;
  }
`;
