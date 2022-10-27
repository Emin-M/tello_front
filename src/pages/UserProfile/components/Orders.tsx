import React, { useEffect, useState } from "react";
import {
  OrderCard,
  OrdersEmpty,
  StyledOrders,
  StyledOrdersFull,
} from "./styles/Orders.styled";
import { Top } from "./styles/Top.styled";
import api from "../../../api/api";
import { formatDate } from "../../../utils/dateFormat";

/* Images */
import shoppingCard from "../../../assets/svg/shopping-cart.svg";

const Orders = () => {
  const [orders, setOrders] = useState<any>();

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");
      setOrders(response?.data?.orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <StyledOrders>
      <Top>
        <h2>Sifarişlərim</h2>
      </Top>
      {!orders ? (
        <OrdersEmpty>
          <img src={shoppingCard} alt="shoppingCard" />
          <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
        </OrdersEmpty>
      ) : (
        <StyledOrdersFull>
          {orders.map((order: any, index: any) => (
            <div key={Math.random()}>
              <div className="header">
                <p>{index + 1}.</p>
                <p>Sifariş tarixi: {formatDate(new Date(order.createdAt))}</p>
                <p>Ümumi məbləğ: {order?.subtotal / 100}.00 AZN</p>
              </div>
              <div className="main" key={Math.random()}>
                {order?.products?.map((product: any) => (
                  <OrderCard key={product?._id}>
                    <img src={product.image} alt={product.name} />
                    <div className="content">
                      <div>
                        <p>Status:</p>
                        <span>
                          {order?.delivery_status === "pending" && "Yoldadır"}
                        </span>
                      </div>
                      <div>
                        <p>Miqdar:</p>
                        <span>{product?.quantity}</span>
                      </div>
                      <div>
                        <p>Qiymət:</p>
                        <span>{product?.price?.formatted_with_code}</span>
                      </div>
                      <div>
                        <p>Ümumi məbləğ:</p>
                        <span>{product?.price.raw * product.quantity} AZN</span>
                      </div>
                    </div>
                  </OrderCard>
                ))}
              </div>
            </div>
          ))}
        </StyledOrdersFull>
      )}
    </StyledOrders>
  );
};

export default Orders;
