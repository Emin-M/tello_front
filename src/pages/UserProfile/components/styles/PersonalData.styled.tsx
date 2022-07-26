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
    border: none;
    outline: none;
    width: 100%;
    height: 60px;
    background: #f2f2f2;
    border-radius: 8px;
    padding: 0 16px;
    font-size: 16px;
  }

  button {
    width: 50%;
    margin-top: 32px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #333333 !important;
    }
  }

  @media (max-width: 850px) {
    .group {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
`;
