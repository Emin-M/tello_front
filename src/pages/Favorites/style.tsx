import styled from "styled-components";

export const StyledFavorites = styled.div`
  margin-top: 128px;
  min-height: calc(100vh - 128px);

  > div > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;

    button {
      transform: translate(10px, -10px);
    }
  }

  .favs {
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 50px;

    > div {
      width: 250px !important;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #4f4f4f;
    margin-bottom: 16px;
  }

  @media (max-width: 850px) {
    > div > div:first-child {
      margin-right: 0px;
    }

    .favs {
      > div {
        width: 100% !important;
      }
    }
  }
`;

export const EmptyFavs = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
