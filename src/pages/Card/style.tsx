import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  margin-top: 128px;
  min-height: calc(100vh - 128px);
  background: #faf9f9;

  @media (max-width: 650px) {
    height: auto;
  }
`;

export const CardTop = styled.div`
  display: flex;
  padding: 40px 0;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
  }
`;
