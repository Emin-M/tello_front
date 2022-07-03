import styled from "styled-components";

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 3;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 650px) {
    > div:nth-child(2) > div {
      display: none;
    }
  }
`;

export const StyledFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  position: relative;
  display: none !important;

  &::after {
    content: "";
    height: 1px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(-16px);
    background: #edf1f7;
  }

  img {
    margin-right: 8px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex: 1;
  }

  > div:nth-child(1) {
    border-right: 1px solid #edf1f7;
  }

  @media (max-width: 650px) {
    display: flex !important;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 32%;
    margin-bottom: 32px;
  }

  @media (max-width: 1000px) {
    flex: 1;

    > div {
      width: 47%;
    }
  }

  @media (max-width: 650px) {
    flex: 1;

    > div {
      width: 100%;
    }
  }
`;
