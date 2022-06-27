import styled from "styled-components";

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1200px) {
    width: 966px;
  }

  @media (max-width: 650px) {
    width: 100%;
    padding: 0 12px;
  }
`;
