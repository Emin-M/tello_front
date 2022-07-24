import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 128px);
  margin-top: 128px;
  padding: 100px 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 850px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const LoginMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 3;
`;

export const LoginMainTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex: 1;

  h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #4f4f4f;
    margin-bottom: 32px;
  }

  img {
    padding: 9px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 56px;
    margin-bottom: 32px;

    p {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }

    p:nth-child(1) {
      img {
        background: #4267b2;
      }
    }

    p:nth-child(2) {
      img {
        background: #db4437;
      }
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #4f4f4f;
    }
  }

  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #bdbdbd;
  }
`;

export const LoginMainBottom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    position: relative;

    div img {
      position: absolute;
      top: 50%;
      right: 16px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  label {
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
    margin-bottom: 8px;
  }

  input {
    border: none;
    outline: none;
    width: 312px;
    height: 48px;
    background: #f2f2f2;
    border-radius: 8px;
    padding: 0 16px;
  }

  input::placeholder {
    font-size: 16px;
    line-height: 20px;
    color: #828282;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #2d9cdb;
    width: 100%;
    margin-top: 8px;
  }

  button {
    margin-top: 48px;
    width: 100%;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    width: 100%;

    > div {
      width: 100%;
    }

    input {
      width: 100%;
    }
  }
`;

export const LoginSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  flex: 2;

  > div {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 36px;
  }

  p {
    font-size: 15px;
    line-height: 20px;
    color: #4f4f4f;
  }

  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #2d9cdb;
  }

  @media (max-width: 850px) {
    width: 100%;

    > div {
      width: 100%;
    }

    > img {
      display: none;
    }
  }
`;
