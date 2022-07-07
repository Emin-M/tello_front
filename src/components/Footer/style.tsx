import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #262626;
  color: #ffffff;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  border-bottom: 1px solid #464545;
  padding-bottom: 88px;

  > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 650px) {
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 33px;
  }

  > img {
    margin-bottom: 26px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    img {
      margin-right: 20px;
    }
  }

  a {
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    opacity: 0.8;
    transition: all 0.3s;

    &:hover {
      color: #2dd06e;
    }
  }

  @media (max-width: 650px) {
    margin-top: 40px;

    li {
      justify-content: center;
    }
  }
`;

/* Bottom */
export const FooterBotttom = styled.div`
  padding: 24px 0;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  a {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.8;
    color: #ffffff;
    margin-left: 40px;
  }

  @media (max-width: 650px) {
    > div {
      justify-content: center;
    }

    > div > div {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      position: absolute;
      top: -70%;

      a {
        margin-left: 0;
      }
    }
  }
`;
