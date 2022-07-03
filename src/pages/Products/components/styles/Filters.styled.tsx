import styled from "styled-components";

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 20px;
  min-height: calc(100vh - 150px);
  transition: all 0.3s;

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 0;
    left: -100%;
    height: calc(100vh);
    width: 100%;
    background: #ffffff;
    z-index: 1;
  }
`;

export const FilterMobileTop = styled.div`
  display: none;
  padding: 20px 0 16px 16px;
  position: relative;

  img {
    margin-right: 22px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #333333;
  }

  @media (max-width: 650px) {
    display: flex;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 1px;
      background: #edf1f7;
    }
  }
`;
