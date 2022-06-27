import { Link } from "react-router-dom";

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
import dImg from "../../assets/images/dropdownImg.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <NavbarTop>
          <NavbarLogo>
            <img src={logo} alt="logo" />
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
        <NavbarBottom>
          <li>
            <Link to="/">Yeni</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Yeni</h2>
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
                </div>
                <div>
                  <h2>Yeni</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Yeni</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Apple</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Apple</h2>
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
                </div>
                <div>
                  <h2>Apple</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Apple</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Samsung</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Samsung</h2>
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
                </div>
                <div>
                  <h2>Samsung</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Samsung</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Xiaomi</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Başlıq</h2>
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
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Redmi</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Başlıq</h2>
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
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Bütün Brendlər</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Başlıq</h2>
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
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Aksessuarlar</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Başlıq</h2>
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
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
          <li>
            <Link to="/">Endirimlər</Link>
            <BottomDropdown>
              <Container>
                <div>
                  <h2>Başlıq</h2>
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
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <div>
                  <h2>Başlıq</h2>
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
                  </ul>
                </div>
                <img src={dImg} alt="dImg" />
              </Container>
            </BottomDropdown>
          </li>
        </NavbarBottom>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
