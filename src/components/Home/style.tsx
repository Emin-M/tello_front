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
    color: #4f4f4f;
  }

  @media (max-width: 650px) {
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
  background: #ffffff;
  border-radius: 8px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

//---------------------------- Services ----------------------------------------------- //

export const Services = styled.div`
  margin-top: 140px;
  margin-bottom: 136px;

  > div {
    display: flex;
    gap: 80px;
  }

  @media (max-width: 650px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;

  img {
    width: 64px;
    height: 66px;
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #333333;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;
