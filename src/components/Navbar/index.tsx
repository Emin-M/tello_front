import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ReusuableComponents/Button";

/* Styles */
import "./style";
import {
  NavbarContainer,
  NavbarTop,
  NavbarLogo,
  NavbarSearch,
  NavbarInput,
  NavbarInputSearch,
  NavbarRight,
  NavbarBottom,
  BottomDropdown,
} from "./style";
import { Container } from "../styles/Container.styled";

/* Images */
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/images/icons/search.png";
import person from "../../assets/images/icons/person.png";
import heart from "../../assets/images/icons/heart.png";
import basket from "../../assets/images/icons/basket.png";
import resBtn from "../../assets/svg/responsive-button.svg";
import closeBtn from "../../assets/svg/close.svg";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <Container>
        <NavbarTop>
          {showSidebar ? (
            <img
              src={closeBtn}
              alt="closeBtn"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          ) : (
            <img
              src={resBtn}
              alt="resButton"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          )}
          <NavbarLogo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </NavbarLogo>
          <NavbarSearch>
            <NavbarInput>
              <img src={search} alt="search" />
              <input type="text" placeholder="Axtarış..." />
              <NavbarInputSearch>
                <div>
                  <h2>Son axtarışlar</h2>
                  <p>Təmizlə</p>
                </div>
                <div>
                  <Link to="/">IPhone</Link>
                  <Link to="/">Samsung TV</Link>
                  <Link to="/">Asus ROG Phone</Link>
                </div>
              </NavbarInputSearch>
            </NavbarInput>
          </NavbarSearch>
          <NavbarRight>
            <img src={person} alt="person" />
            <img src={heart} alt="heart" />
            <div>
              <img src={basket} alt="basket" />
              <span>0</span>
            </div>
          </NavbarRight>
        </NavbarTop>
        <NavbarBottom style={showSidebar ? { left: "0" } : { left: "-100%" }}>
          <li>
            <Link to="/">Yeni</Link>
            <BottomDropdown>
              <Container>
                <ul>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                </ul>
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Apple</Link>
            <BottomDropdown>
              <Container>
                <ul>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                  <li>
                    <Link to="/">Alt Başlıq</Link>
                  </li>
                </ul>
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Samsung</Link>
          </li>
          <li>
            <Link to="/">Xiaomi</Link>
          </li>
          <li>
            <Link to="/">Redmi</Link>
          </li>
          <li>
            <Link to="/">Bütün Brendlər</Link>
          </li>
          <li>
            <Link to="/">Aksessuarlar</Link>
          </li>
          <li>
            <Link to="/">Endirimlər</Link>
          </li>
          <div>
            <Link to="/login" onClick={() => setShowSidebar(!showSidebar)}>
              <Button title="Daxil ol" bg="#ffffff" color="#2dd06e" />
            </Link>
            <Link to="/signup" onClick={() => setShowSidebar(!showSidebar)}>
              <Button title="Qeydiyyat" bg="#2dd06e" color="#ffffff" />
            </Link>
          </div>
        </NavbarBottom>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
