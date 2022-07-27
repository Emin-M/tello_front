import styled from "styled-components";

export const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 128px;
  min-height: calc(100vh - 128px);
  padding-top: 50px;

  p {
    font-size: 25px;
    line-height: 32px;
    margin: 0 0 20px;
  }

  h2 {
    font-weight: 600;
    font-size: 52px;
    line-height: 72px;
    margin: 0 0 20px;
  }

  a {
    font-size: 25px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 850px) {
    padding-top: 0;

    p {
      font-size: 20px;
      line-height: 27px;
    }

    h2 {
      font-weight: 600;
      font-size: 40px;
      line-height: 60px;
    }

    a {
      font-size: 20px;
    }
  }
`;
