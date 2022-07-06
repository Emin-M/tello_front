import styled from "styled-components";

export const ParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParamsTop = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 16px;

  div {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }

  a {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    cursor: pointer;
  }

  a:nth-child(2) {
    color: #bdbdbd;
  }

  @media (max-width: 650px) {
    margin-top: 50px;

    div {
      width: 100%;
    }
  }
`;

export const ParamsBottom = styled.div`
  display: flex;
  padding: 30px 50px;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    padding: 30px 0;
  }
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    width: 100%;
  }

  > div {
    width: 100%;
    padding: 0 20px;
  }

  > div > div {
    display: flex;
    margin-bottom: 20px;
  }

  ul {
    margin-right: 150px;
  }

  li {
    font-size: 16px;
    line-height: 24px;
    color: #828282;
    margin-bottom: 16px;
  }

  @media (max-width: 650px) {
    > div {
      padding: 0;
    }

    > div > div {
      justify-content: space-between;
    }

    ul {
      margin-right: 0;
      padding: 0 10px;
    }
  }
`;

export const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: #828282;
  }

  @media (max-width: 650px) {
    p {
      padding: 0 10px;
      padding-bottom: 20px;
    }
  }
`;
