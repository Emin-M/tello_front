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

  input {
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    background: inherit;

    &:focus ~ div {
      display: block;
      opacity: 1;
    }
  }

  @media (max-width: 650px) {
    /* padding: 0 12px; */
  }
`;

export const NavbarInputSearch = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.3s;
  margin-top: 2px;
  padding: 25px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-top: none;
  border-radius: 0 0 8px;
  display: none;
  opacity: 0;
  background: #ffffff;
  z-index: 1;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #4f4f4f;
    }

    p {
      font-size: 12px;
      line-height: 16px;
      color: #828282;
      cursor: pointer;
    }
  }

  > div:nth-child(2) {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;

    a {
      font-size: 14px;
      line-height: 20px;
      color: #4f4f4f;
      padding: 2px 6px;
      background: #edf1f7;
      border-radius: 4px;
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

  span {
    position: absolute;
    top: -10px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 6px;
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

  > li {
    > a {
      font-size: 14px;
      line-height: 20px;
      color: #4f4f4f;
      height: 45px;
      display: inline-block;

      &:hover {
        color: #2dd06e;
        border-bottom: 2px solid #2dd06e;
      }

      &:hover ~ div {
        opacity: 1;
        display: block;
      }
    }
  }

  @media (max-width: 650px) {
    display: none;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 10px;

    > li {
      > a {
        height: auto;
      }
    }
  }
`;

export const BottomDropdown = styled.div`
  background: #ffffff;
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 350px;
  display: none;
  padding-top: 40px;
  background: #fff;
  margin-top: 1px;
  opacity: 0;
  transition: all 0.3s;

  &:hover {
    display: block;
    opacity: 1;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    margin-bottom: 16px;

    &:hover {
      color: #2dd06e;
      cursor: pointer;
    }
  }

  li {
    margin-bottom: 12px;
  }

  a {
    font-size: 14px;
    line-height: 20px;
    color: #4f4f4f;
    height: auto;

    &:hover {
      color: #2dd06e;
    }
  }

  img {
    width: 488px;
    height: 228px;
  }
`;
