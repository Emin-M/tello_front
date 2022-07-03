import React, { FC } from "react";
import { Container } from "../../ReusuableComponents/styles/Container.styled";
import { Service, ServicesContainer } from "./styles/Service.styled";

/* Images */
import service1 from "../../../assets/images/home/box.png";
import service2 from "../../../assets/images/home/card-pos.png";
import service3 from "../../../assets/images/home/medal-star.png";

const Services: FC = () => {
  return (
    <ServicesContainer>
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
    </ServicesContainer>
  );
};

export default Services;
