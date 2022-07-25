import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import { StyledExchangeToken } from "./style";
import { CircularProgress } from "@mui/material";
import api from "../../api/api";

const ExchangeToken = () => {
  const { token } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    token && isLoggedIn && loginUser(token);
  }, []);

  /* Login User Function */
  const loginUser = async (token: string) => {
    try {
      const response: any = await api.post("/customers/exchange-token", {
        token: token,
      });
      setIsLoggedIn(false);
      !localStorage.getItem("customerId") &&
        localStorage.setItem("customerId", response?.data?.customer_id);
      navigate("/userprofile");
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const customerId = localStorage.getItem("customerId");

  return (
    <StyledExchangeToken>
      {isLoggedIn ? (
        <Container>
          <CircularProgress />
          <h2>You Are Logging In...</h2>
        </Container>
      ) : (
        <Container style={{ textAlign: "center" }}>
          {customerId ? (
            <h2>Siz Artıq daxil olmusunuz</h2>
          ) : (
            <h2>"{token}" nişanı tapılmadı və ya artıq etibarlı deyil."</h2>
          )}
        </Container>
      )}
    </StyledExchangeToken>
  );
};

export default ExchangeToken;
