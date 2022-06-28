import React, { FC, useState } from "react";
import Slider from "react-slick";
import CardContainer from "./CardContainer";
import Advertisement from "./Advertisement";
import Products from "./Products";

/* Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "../styles/Container.styled";
import {
  HomeSlider,
  SliderItem,
  SecondSlider,
  SecondSliderItem,
  Services,
  Service,
} from "./style";

/* Images */
import marka1 from "../../assets/images/home/marka1.png";
import marka2 from "../../assets/images/home/marka2.png";
import marka3 from "../../assets/images/home/marka3.png";
import marka4 from "../../assets/images/home/marka4.png";
import marka5 from "../../assets/images/home/marka5.png";
import marka6 from "../../assets/images/home/marka6.png";
import homeImg from "../../assets/images/home/homeImg.png";
import service1 from "../../assets/images/home/box.png";
import service2 from "../../assets/images/home/card-pos.png";
import service3 from "../../assets/images/home/medal-star.png";
import phone1 from "../../assets/images/home/phone1.png";
import phone2 from "../../assets/images/home/phone2.png";
import phone3 from "../../assets/images/home/phone3.png";
import phone4 from "../../assets/images/home/phone4.png";
import accessory1 from "../../assets/images/home/accessory1.png";
import accessory2 from "../../assets/images/home/accessory2.png";
import accessory3 from "../../assets/images/home/accessory3.png";
import accessory4 from "../../assets/images/home/accessory4.png";

const Home: FC = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: phone1,
      name: "Apple  iPhone 12, 64 GB, Purple",
      price: 1300,
    },
    {
      id: 2,
      img: phone2,
      name: "Nokia X10, 64 GB, Deep Green",
      price: 500,
    },
    {
      id: 3,
      img: phone3,
      name: "Realme 8 Pro 6/128Gb Black",
      price: 300,
    },
    {
      id: 4,
      img: phone4,
      name: "Xiaomi Poco M3 4/128Gb Yellow (Global)",
      price: 700,
    },
  ]);

  const [products2, setProducts2] = useState([
    {
      id: 5,
      img: accessory1,
      name: "Apple Iphone MagSafe to USB-C Cable",
      price: 1300,
    },
    {
      id: 6,
      img: accessory2,
      name: "Apple Air Tag Leather Loop  Red",
      price: 500,
    },
    {
      id: 7,
      img: accessory3,
      name: "Apple AirPods Max Green",
      price: 300,
    },
    {
      id: 8,
      img: accessory4,
      name: "Apple AirPods Pro with Wireless Charging Case",
      price: 700,
    },
  ]);

  const SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const SecondSlickSettings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      {/* Slider */}
      <HomeSlider>
        <Slider {...SlickSettings}>
          <SliderItem>
            <Container>
              <div>
                <h2>
                  Buy & Sell <br /> What's Now & Next
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  <br />
                  malesuada et leo faucibus
                </p>
              </div>
              <img src={homeImg} alt="homeImg" />
            </Container>
          </SliderItem>
          <SliderItem>
            <Container>
              <div>
                <h2>
                  Buy & Sell <br /> What's Now & Next
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  <br />
                  malesuada et leo faucibus
                </p>
              </div>
              <img src={homeImg} alt="homeImg" />
            </Container>
          </SliderItem>
          <SliderItem>
            <Container>
              <div>
                <h2>
                  Buy & Sell <br /> What's Now & Next
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  <br />
                  malesuada et leo faucibus
                </p>
              </div>
              <img src={homeImg} alt="homeImg" />
            </Container>
          </SliderItem>
        </Slider>
      </HomeSlider>

      {/* Most Seller */}
      <CardContainer
        title="Ən çox satılan məhsullar"
        link="popular"
        products={products}
      />

      {/* New */}
      <CardContainer
        title="Yeni gələn məhsullar"
        link="new"
        products={products}
      />

      {/* Advertisement */}
      <Advertisement />

      {/* Accessory */}
      <CardContainer
        title="Yeni gələn aksessuarlar"
        link="newaccessory"
        products={products2}
      />

      {/* Products */}
      <Products />

      {/* Services */}
      <Services>
        <Container>
          <Service>
            <img src={service1} alt="service1" />
            <h2>Çatdırılma</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </Service>
          <Service>
            <img src={service2} alt="service2" />
            <h2>Kredit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </Service>
          <Service>
            <img src={service3} alt="service3" />
            <h2>Zəmanət</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </Service>
        </Container>
      </Services>

      {/* Markas */}
      <SecondSlider>
        <Container>
          <Slider {...SecondSlickSettings}>
            <SecondSliderItem>
              <img src={marka1} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka2} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka3} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka4} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka5} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka6} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka1} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka2} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka3} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka4} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka5} alt="marka1" />
            </SecondSliderItem>
            <SecondSliderItem>
              <img src={marka6} alt="marka1" />
            </SecondSliderItem>
          </Slider>
        </Container>
      </SecondSlider>
    </React.Fragment>
  );
};

export default Home;
