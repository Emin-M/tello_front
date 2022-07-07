import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 380px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(164, 164, 164, 0.3);
  border-radius: 4px;
  padding: 40px 24px;
  padding-bottom: 15px;
  cursor: pointer;
  position: relative;

  img {
    transition: all 0.3s;
  }

  &:hover img {
    transform: scale(1.1);
  }

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      width: 183px;
      height: 210px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 40px;
    height: 40px;
    border: 1px solid #f2f2f2;
    border-radius: 50%;
  }

  h3 {
    align-self: flex-start;
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }

  p {
    align-self: flex-start;
    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }

  span {
    /* margin-left: 8px; */
    margin-right: 5px;
  }

  del {
    margin-right: 2px;
    font-size: 14px;
    color: #828282;
  }
`;
