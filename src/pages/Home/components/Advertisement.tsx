import React, { FC } from "react";
import { Container } from "../../ReusuableComponents/styles/Container.styled";
import { AdvertisementContainer } from "./styles/Advertisement.styled";

import ad1 from "../../../assets/images/home/advertisement1.png";
import ad2 from "../../../assets/images/home/advertisement2.png";

const Advertisement: FC = () => {
  return (
    <AdvertisementContainer>
      <Container>
        <img src={ad2} alt="ad" />
        <img src={ad1} alt="ad" />
      </Container>
    </AdvertisementContainer>
  );
};

export default Advertisement;
