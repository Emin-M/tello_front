import styled from "styled-components";

export const StyledSignup = styled.div`
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
    padding: 50px 0 100px 0;

    > div {
      flex-direction: column;
    }
  }
`;

export const SignupMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 3;
`;

export const SignupMainTop = styled.div`
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
    gap: 20px;
    margin-bottom: 32px;

    > div:nth-child(1) {
      display: flex;
      width: 180px;
      height: 40px;
      background: #3e58a5;
      border-radius: 3px;
      cursor: not-allowed;
    }

    button {
      height: 100%;
      border: none;
      outline: none;
      background: #3e58a5;
      color: #ffffff;
      border-radius: 3px;
      cursor: not-allowed;
      margin-left: 20px;
    }
  }

  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #bdbdbd;
  }

  @media (max-width: 650px) {
    > div {
      > div:nth-child(1) {
        width: 140px;
        opacity: 0.5;
      }

      button {
        margin-left: 0px;
      }
    }
  }
`;

export const SignupMainBottom = styled.form`
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

    .error {
      margin-top: 5px;
      color: #ff0000;
    }
  }

  .checkbox {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 8px;

    a {
      width: auto;
      margin: 0;
    }

    p {
      position: absolute;
      top: 120%;
      left: 0;
    }
  }

  label {
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
    margin-bottom: 8px;
  }

  input {
    border: none !important;
    outline: none !important;
    width: 400px !important;
    height: 48px !important;
    background: #f2f2f2 !important;
    border-radius: 8px !important;
    padding: 0 16px;
    font-size: 16px !important;
  }

  input[type="checkbox"] {
    outline: none !important;
    width: 24px !important;
    height: 24px !important;
    border: 1px solid #e0e0e0 !important;
    border-radius: 8px !important;
    cursor: pointer !important;
  }

  input::placeholder {
    font-size: 16px;
    line-height: 20px;
    color: #828282;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: right;
    color: #2d9cdb;
    width: 100%;
    margin-top: 8px;
  }

  button {
    font-size: 16px;
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
      width: 100% !important;
    }
  }
`;

export const SignupSvg = styled.div`
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
