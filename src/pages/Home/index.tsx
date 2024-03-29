import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import CardContainer from "./components/CardContainer";
import Advertisement from "./components/Advertisement";
import Products from "./components/Products";
import Services from "./components/Services";
import { fetchProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { IProduct } from "../../modules/types/products";

/* Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import {
  HomeSlider,
  SliderItem,
  SecondSlider,
  SecondSliderItem,
} from "./style";

/* Images */
import marka1 from "../../assets/images/home/marka1.png";
import marka2 from "../../assets/images/home/marka2.png";
import marka3 from "../../assets/images/home/marka3.png";
import marka4 from "../../assets/images/home/marka4.png";
import marka5 from "../../assets/images/home/marka5.png";
import marka6 from "../../assets/images/home/marka6.png";
import homeImg from "../../assets/images/home/homeImg.png";

const Home: FC = () => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts({ limit: 20 }));
  }, []);

  /* Sliders Settings */
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

  const [firstProductsGroup, setFirstProductsGroup] = useState<IProduct[]>([]);
  const [secondProductsGroup, setSecondProductsGroup] = useState<IProduct[]>(
    []
  );

  const sortData = (products: IProduct[]) => {
    let firstProductsIdentificator = "noutbuklar";
    let secondProductsIdentificator = "oyun-konsollar";
    products.map((product) => {
      product.categories.map((category) => {
        category.name === firstProductsIdentificator &&
          setFirstProductsGroup((prevs) => [...prevs, product]);
        category.name === secondProductsIdentificator &&
          setSecondProductsGroup((prevs) => [...prevs, product]);
      });
    });
  };

  useEffect(() => {
    sortData(products);
  }, [products]);

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
        link="products/telefonlar"
      />

      {/* New */}
      <CardContainer
        data={firstProductsGroup}
        title="Yeni gələn Noutbuklar"
        link="products/noutbuklar"
      />

      {/* Advertisement */}
      <Advertisement />

      {/* Accessory */}
      <CardContainer
        data={secondProductsGroup}
        title="Yeni gələn oyun konsolları"
        link="products/oyun-konsollar"
      />

      {/* Products */}
      <Products />

      {/* Services */}
      <Services />

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
