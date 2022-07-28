import styled from "styled-components";

export const StyledReletedProducts = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 50px 0;

  h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #333333;
  }

  > div {
    display: flex;
    gap: 32px;
    padding: 10px 2px;

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-x: scroll;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      width: 300px;
    }
  }
`;
