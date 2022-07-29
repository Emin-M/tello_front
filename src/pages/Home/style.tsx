import styled from "styled-components";
import homeBg from "../../assets/images/home/homeBg.png";

export const HomeSlider = styled.div`
  width: 100%;
  height: calc(100vh - 128px);
  position: relative;
  background-image: url("${homeBg}");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 128px;

  > div {
    width: 100%;
    height: 90%;
    padding-top: 50px;
    padding-right: 50px;
  }

  @media (max-width: 650px) {
    > div {
      padding-top: 0;
      padding-right: 0;
    }
  }
`;

export const SliderItem = styled.div`
  > div {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    color: #000000;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-75);
  }

  @media (max-width: 850px) {
    > div {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
    }

    h2 {
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      margin-top: 30px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    img {
      width: 231px;
      height: 216px;
    }
  }
`;

// ---------------------------- Second-Slider ------------------------------------------ //

export const SecondSlider = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  background: #f5f5f7;
  height: 210px;

  > div {
    background: #f5f5f7;
  }

  > div > div {
    background: #f5f5f7;
    display: flex !important;
    gap: 16px !important;
  }
`;
export const SecondSliderItem = styled.div`
  position: relative;
  margin-right: 16px;
  width: 176px !important;
  height: 80px;
  background: var(--white);
  border-radius: 8px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
