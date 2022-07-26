import styled from "styled-components";

export const StyledProfileLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  padding: 32px 24px;
  min-height: calc(100vh - 300px);
  height: 0px !important;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    margin-bottom: 32px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  a {
    font-size: 18px;
    line-height: 24px;
    color: #4f4f4f;
    transition: all 0.3s;

    &:hover {
      color: #2dd06e;
    }
  }

  @media (max-width: 850px) {
    min-height: auto;
  }
`;
