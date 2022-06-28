import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import {
  FooterBotttom,
  FooterContainer,
  FooterLinks,
  FooterSocial,
  FooterTop,
} from "./style";

/* Images */
import logo from "../../assets/svg/logo.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import youtube from "../../assets/svg/youtube.svg";
import twitter from "../../assets/svg/twitter.svg";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Container>
          <FooterSocial>
            <img src={logo} alt="logo" />
            <div>
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={youtube} alt="youtube" />
              <img src={twitter} alt="twitter" />
            </div>
          </FooterSocial>
          <FooterLinks>
            <h2>Menu</h2>
            <ul>
              <li>
                <Link to="new">Yeni</Link>
              </li>
              <li>
                <Link to="new">Endirimlər</Link>
              </li>
              <li>
                <Link to="new">Aksessuarlar</Link>
              </li>
              <li>
                <Link to="new">Bütün brendlər</Link>
              </li>
            </ul>
          </FooterLinks>
          <FooterLinks>
            <h2>Kömək</h2>
            <ul>
              <li>
                <Link to="help">Tez-tez soruşulan suallar</Link>
              </li>
              <li>
                <Link to="help">Çatdırılma xidməti</Link>
              </li>
              <li>
                <Link to="help">Geri qaytarılma şərtləri</Link>
              </li>
            </ul>
          </FooterLinks>
          <FooterLinks>
            <h2>Əlaqə</h2>
            <ul>
              <li>
                <img src={instagram} alt="instagram" />{" "}
                <Link to="new">M. K. Ataturk avenue 89, Baku, Azerbaijan</Link>
              </li>
              <li>
                <img src={instagram} alt="instagram" />
                <Link to="new">example@gmail.com</Link>
              </li>
              <li>
                <img src={instagram} alt="instagram" />
                <Link to="new">*2108</Link>
              </li>
            </ul>
          </FooterLinks>
        </Container>
      </FooterTop>
      <FooterBotttom>
        <Container>
          <h2>© PeojectX 2021. Bütün hüquqlar qorunur.</h2>
          <div>
            <Link to="rules">Qaydalar və şərtlər</Link>
            <Link to="privacy">Məxfilik siyasəti</Link>
          </div>
        </Container>
      </FooterBotttom>
    </FooterContainer>
  );
};

export default Footer;
