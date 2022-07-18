import { MouseEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ReusuableComponents/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ICategory } from "../../modules/types/categories";
import { Skeleton } from "@mui/material";

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
import { Container } from "../ReusuableComponents/styles/Container.styled";

/* Images */
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/images/icons/search.png";
import person from "../../assets/images/icons/person.png";
import heart from "../../assets/images/icons/heart.png";
import basket from "../../assets/images/icons/basket.png";
import resBtn from "../../assets/svg/responsive-button.svg";
import closeBtn from "../../assets/svg/close.svg";
import arrowRight from "../../assets/images/icons/arrowRight.png";
import arrowLeft from "../../assets/images/icons/arrowLeft.png";

const Navbar = () => {
  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );
  const { items } = useSelector((state: RootState) => state.card);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const location = useLocation();
  const itemEls = useRef(new Array());

  useEffect(() => {
    setShowSidebar(false);
  }, [location]);

  const boxMouseOverHandler = (event: MouseEvent<HTMLLIElement>) => {
    const box: HTMLLIElement = event.currentTarget;
    box.style.color = "#2dd06e";
  };

  const boxMouseOutHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const box: HTMLLIElement = event.currentTarget;
    box.style.color = "#4f4f4f";
  };

  const boxMouseOverHandlerDiv = (event: MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget.parentElement as HTMLLIElement;
    const child = element.firstChild as HTMLElement;
    child.style.color = "#2dd06e";
    child.style.borderBottom = "2px solid #2dd06e";
  };

  const boxMouseOutHandlerDiv = (event: MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget.parentElement as HTMLLIElement;
    const child = element.firstChild as HTMLElement;
    child.style.color = "#4f4f4f";
    child.style.borderBottom = "none";
  };

  const showSub = (category: ICategory, event: MouseEvent<HTMLLIElement>) => {
    let showSubCategory = false;
    category.children[0] ? (showSubCategory = true) : (showSubCategory = false);

    /* clearing all "active" classes */
    itemEls.current.map((itemEl) => {
      itemEl.classList.remove("active");
    });

    /* adding "active class to the clicked item" */
    const element = event.currentTarget as HTMLLIElement;
    const child = element.lastChild as HTMLDivElement;
    showSubCategory && child.classList.add("active");
  };

  const hideSub = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const element = event.currentTarget.parentElement
      ?.parentElement as HTMLDivElement;
    element.classList.remove("active");
  };

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
            <div>
              <Link to="/account">
                <img src={person} alt="person" />
              </Link>
            </div>
            <div>
              <Link to="/favorites">
                <img src={heart} alt="heart" />
              </Link>
            </div>
            <div>
              <Link to="/card">
                <img src={basket} alt="basket" />
              </Link>
              <span>{items ? items?.total_unique_items : 0}</span>
            </div>
          </NavbarRight>
        </NavbarTop>
        {loading ? (
          <NavbarBottom>
            <Skeleton animation="wave" width={100} height={30} variant="text" />
            <Skeleton animation="wave" width={100} height={30} variant="text" />
            <Skeleton animation="wave" width={100} height={30} variant="text" />
            <Skeleton animation="wave" width={100} height={30} variant="text" />
            <Skeleton animation="wave" width={100} height={30} variant="text" />
          </NavbarBottom>
        ) : (
          <NavbarBottom style={showSidebar ? { left: "0" } : { left: "-100%" }}>
            {categories?.[0]?.children.map((category: ICategory) => (
              <li
                key={category.id}
                onClick={(event) => showSub(category, event)}
              >
                <Link to={`products/${category.slug}`}>
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </Link>
                {category.children[0] && (
                  <img src={arrowRight} alt="arrowRight" />
                )}
                <BottomDropdown
                  onMouseOver={boxMouseOverHandlerDiv}
                  onMouseOut={boxMouseOutHandlerDiv}
                  ref={(element) => {
                    element && itemEls.current.push(element);
                  }}
                >
                  <Container>
                    <div onClick={(event) => hideSub(event)}>
                      <img src={arrowLeft} alt="arrowLeft" />
                    </div>
                    <ul>
                      {category.children.map((subcategory: ICategory) => (
                        <li key={subcategory.id}>
                          <Link
                            to={`products/${category.name}?brand=${subcategory.name}`}
                          >
                            {subcategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </BottomDropdown>
              </li>
            ))}
            <div>
              <Link to="/login">
                <Button title="Daxil ol" bg="#ffffff" color="#2dd06e" />
              </Link>
              <Link to="/signup">
                <Button title="Qeydiyyat" bg="#2dd06e" color="#ffffff" />
              </Link>
            </div>
          </NavbarBottom>
        )}
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
