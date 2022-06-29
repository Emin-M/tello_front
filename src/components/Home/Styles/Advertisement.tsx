import styled from "styled-components";

export const AdvertisementContainer = styled.div`
  margin-bottom: 100px;
  margin-top: 64px;

  > div {
    display: flex;
    gap: 32px;
  }

  img {
    width: 50%;
    height: 50%;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    > div {
      flex-direction: column;
      gap: 24px;
    }

    img {
      width: 100%;
      height: 155px;
    }
  }
`;
