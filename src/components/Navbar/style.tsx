import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 128px;
  margin: 0 auto;
  border-bottom: 1px solid #2dd06e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #ffffff;

  @media (max-width: 650px) {
    display: block;
  }
`;

/* Top */
export const NavbarTop = styled.div`
  display: flex;
  margin-bottom: 10px;

  > img {
    margin-right: 20px;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    > img {
      display: block;
    }
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const NavbarSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;

  @media (max-width: 650px) {
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    padding: 0 12px;
    background: #ffffff;
  }
`;

export const NavbarInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  position: relative;
  background: #f2f2f2;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding-left: 16px;

  img {
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    background: inherit;

    /* &:focus ~ div {
      display: block;
      opacity: 1;
    } */

    &::placeholder {
      font-size: 15px;
    }
  }
`;

export const NavbarInputSearch = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.3s;
  padding: 25px;
  padding-top: 0;
  width: 100%;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-top: none;
  border-radius: 8px;
  background: #ffffff;
  z-index: 1;
  max-height: 300px;

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    display: block;
    opacity: 1;
  }

  /* For Searches Part */
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    position: sticky;
    top: 0;
    z-index: 5;
    background: #ffffff;
    padding: 25px 0 10px 0;

    h2 {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #4f4f4f;
    }

    p {
      font-size: 16px;
      line-height: 16px;
      color: #828282;
      cursor: pointer;
    }
  }

  > div:nth-child(2) {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;

    p {
      font-size: 16px;
      line-height: 20px;
      color: #4f4f4f;
      padding: 3px 9px;
      background: #edf1f7;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  /* For Results Part */
  a {
    display: flex;
    margin-top: 26px;

    img {
      width: 64px;
      height: 64px;
    }

    > div:nth-child(2) {
      margin-left: 20px;
    }

    h2 {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #192038;
    }
  }
`;

export const NavbarRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;

  > div {
    transform: translateY(5px);
  }

  img {
    cursor: pointer;
  }

  span {
    position: absolute;
    top: -15px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background: #2dd06e;
    border-radius: 50%;
    color: #ffffff;
  }

  @media (max-width: 650px) {
    gap: 10px;
  }
`;

/* Bottom */
export const NavbarBottom = styled.ul`
  display: flex;
  gap: 50px;
  background: #ffffff;

  > div {
    display: none;
  }

  .active {
    left: 0;
  }

  > li {
    > a {
      font-size: 18px;
      line-height: 20px;
      color: #4f4f4f;
      height: 41px;
      display: inline-block;

      &:hover {
        color: #2dd06e !important;
        border-bottom: 2px solid #2dd06e !important;
      }

      &:hover ~ div {
        opacity: 1;
        display: block;
      }
    }

    img {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 128px;
    left: -100%;
    width: 100%;
    gap: 21px;
    height: calc(100vh - 128px);
    padding: 16px 16px 0 16px;
    flex-direction: column;
    transition: all 0.3s;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 16px;
      width: 100%;
      background: #faf9f9;
      height: 80px;
    }

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > a {
        font-size: 18px;
        line-height: 20px;
        height: 100%;

        &:hover {
          color: #4f4f4f;
          border: none;
        }
      }

      img {
        display: block;
      }
    }
  }
`;

export const BottomDropdown = styled.div`
  background: #ffffff;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  opacity: 0;
  padding: 20px 0;
  width: 100%;
  margin-top: 1px;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.3s;

  &:hover {
    display: block;
    opacity: 1;
  }

  ul {
    display: flex;
    width: 100%;
    padding-inline-start: 0px;
  }

  li {
    margin-right: 80px;
  }

  a {
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
    transition: all 0.3s;

    &:hover {
      color: #2dd06e;
    }
  }

  @media (max-width: 650px) {
    top: 0;
    left: -100%;
    padding: 20px 0;
    height: calc(100vh - 128px);
    display: block;
    opacity: 1;

    img {
      margin-bottom: 20px;
    }

    ul {
      flex-direction: column;
    }

    li {
      margin-right: 0px;
      margin-bottom: 20px;

      a {
        display: block;
      }
    }
  }
`;
