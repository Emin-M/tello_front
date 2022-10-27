import api from "../../api/api";

const PayButton = ({ cartId, cartItems }) => {
  const handleCheckout = () => {
    api
      .post(`checkout`, {
        cartItems,
        cartId,
      })
      .then((response) => {
        if (response.data.session.url) {
          window.location.href = response.data.session.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Səbəti təsdiqlə</button>
    </>
  );
};

export default PayButton;
