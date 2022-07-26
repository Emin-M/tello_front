import React from "react";
import { OrdersEmpty, StyledOrders } from "./styles/Orders.styled";
import { Top } from "./styles/Top.styled";

/* Images */
import shoppingCard from "../../../assets/svg/shopping-cart.svg";

const Orders = () => {
  return (
    <StyledOrders>
      <Top>
        <h2>Sifarişlərim</h2>
      </Top>
      <OrdersEmpty>
        <img src={shoppingCard} alt="shoppingCard" />
        <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
      </OrdersEmpty>
    </StyledOrders>
  );
};

export default Orders;
