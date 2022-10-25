import api from "../../api/api";

const PayButton = ({ cartItems }) => {
  const handleCheckout = () => {
    api
      .post(`checkout`, {
        cartItems,
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
