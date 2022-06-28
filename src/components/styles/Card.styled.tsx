import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 164, 164, 0.3);
  border-radius: 4px;
  padding: 24px;
  padding-bottom: 15px;
  cursor: pointer;

  h3 {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }

  p {
    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }

  span {
    margin-left: 8px;
    margin-right: 5px;
  }

  del {
    margin-right: 2px;
    font-size: 14px;
    color: #828282;
  }
`;
