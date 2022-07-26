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
  flex: 1;
  background: #ffffff;
  border-radius: 8px;

  p {
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
    margin-top: 50px;
  }
`;
