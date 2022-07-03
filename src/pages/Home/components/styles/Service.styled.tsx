import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin-top: 140px;
  margin-bottom: 136px;

  > div {
    display: flex;
    gap: 80px;
  }

  @media (max-width: 650px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;

  img {
    width: 64px;
    height: 66px;
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #333333;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;
