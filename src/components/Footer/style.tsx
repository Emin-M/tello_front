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
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    margin-bottom: 26px;
  }

  img {
    margin-right: 33px;
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
`;

/* Bottom */
export const FooterBotttom = styled.div`
  padding: 24px 0;

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
`;
