import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 100%;
  position: relative;

  @media (max-width: 850px) {
    margin-bottom: 70px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #333333;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    cursor: pointer;
  }

  img {
    margin-left: 10px;
  }

  @media (max-width: 850px) {
    a {
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 10px 2px;

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: scroll;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
