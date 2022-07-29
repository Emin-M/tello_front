import styled from "styled-components";

export const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  padding: 26px 0;

  li,
  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;

    img {
      margin: 0 10px;
    }
  }

  p {
    color: #828282;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
