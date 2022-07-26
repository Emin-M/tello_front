import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const customer = localStorage.getItem("customerId");

  if (!customer) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
