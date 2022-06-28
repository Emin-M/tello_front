import styled from "styled-components";

export const Container = styled.div`
  width: 1180px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 966px;
  }

  @media (max-width: 960px) {
    width: 720px;
  }

  @media (max-width: 650px) {
    width: 100%;
    padding: 0 16px;
  }
`;
