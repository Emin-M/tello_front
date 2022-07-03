import styled from "styled-components";

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 20px;
  min-height: calc(100vh - 150px);

  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
  }

  @media (max-width: 650px) {
    position: absolute;
    left: -100%;
  }
`;
