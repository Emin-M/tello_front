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
          alert(
            "Ödəniş test modundadır. Yoxlanış üçün '4242-4242-4242-4242' card məlumatından isdifadə edin."
          );
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
