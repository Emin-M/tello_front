import styled from "styled-components";

export const StyledPersonalData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledPersonalDataForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: #ffffff;
  border-radius: 8px;
  padding: 32px;

  .group {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
  }

  .error {
    margin-top: 5px;
    color: #ff0000;
  }

  .group > div {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 100%;
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
    width: 100% !important;
    height: 48px !important;
    background: #f2f2f2 !important;
    border-radius: 8px !important;
    padding: 0 16px;
    font-size: 16px !important;
  }

  button {
    outline: none;
    border: 1px solid #2dd06e;
    border-radius: 8px;
    height: 48px;
    width: 50%;
    margin-top: 32px;
    font-size: 16px;
    color: #ffffff;
    background: #2dd06e;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #333333 !important;
    }

    &:disabled {
      background: #e5e5e5;
      border: none;
      pointer-events: none;
    }

    img {
      margin-right: 10px;
    }
  }

  @media (max-width: 850px) {
    gap: 10px;
    padding: 32px 16px;

    .group {
      gap: 10px;
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
`;
