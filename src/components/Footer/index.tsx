import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ReusuableComponents/styles/Container.styled";
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
import pin from "../../assets/images/icons/pin.png";
import phone from "../../assets/images/icons/phone.png";
import email from "../../assets/images/icons/email.png";

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
              <li style={{ justifyContent: "flex-start", textAlign: "left" }}>
                <img src={pin} alt="pin" />
                <Link to="new" style={{ color: "#2dd06e" }}>
                  M. K. Ataturk avenue 89, Baku, <br /> Azerbaijan
                </Link>
              </li>
              <li style={{ justifyContent: "flex-start", textAlign: "left" }}>
                <img src={email} alt="email" />
                <Link to="new">example@gmail.com</Link>
              </li>
              <li style={{ justifyContent: "flex-start", textAlign: "left" }}>
                <img src={phone} alt="phone" />
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
