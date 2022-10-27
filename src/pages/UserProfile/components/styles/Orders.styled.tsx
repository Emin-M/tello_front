import styled from "styled-components";

export const StyledOrders = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OrdersEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  height: 100%;
  padding: 100px 30px;

  p {
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
    margin-top: 50px;
  }

  @media (max-width: 850px) {
    /* padding: 100px 30px; */
  }
`;

export const StyledOrdersFull = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 60px;
    background: #ffffff;
    border-radius: 8px;
    padding: 0 30px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 850px) {
    .header {
      padding: 0 10px;
    }
  }
`;

export const OrderCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 48%;
  height: 325px;
  background: #ffffff;
  border-radius: 8px;

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;

    > div {
      height: 20%;
    }
  }

  img {
    width: 50%;
    margin: auto 0;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
    margin-top: 50px;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;
