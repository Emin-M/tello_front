import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const customer = localStorage.getItem("customerId");

  if (customer) {
    return <Navigate to="/userprofile/orders" replace />;
  }

  return children;
};

export default AuthRoute;
