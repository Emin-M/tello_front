import styled from "styled-components";

export const EmptyCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  height: 70%;
  border-radius: 8px;
  margin-top: 10px;

  p {
    font-size: 18px;
    line-height: 26px;
    color: #bdbdbd;
    padding: 35px 0;
  }

  button {
    width: 280px;
    height: 48px;
    font-size: 16px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background: #333333 !important;
    }
  }
`;
