import { MouseEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ReusuableComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { ICategory } from "../../modules/types/categories";
import { Skeleton } from "@mui/material";
import { fetchSearchResults } from "../../redux/actions/productActions";
import { IProduct } from "../../modules/types/products";
import { fetchCards } from "../../redux/actions/cardActions";
import { getUser } from "../../redux/actions/userActions";

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
import heartFull from "../../assets/images/icons/heartFull.png";
import basket from "../../assets/images/icons/basket.png";
import resBtn from "../../assets/svg/responsive-button.svg";
import closeBtn from "../../assets/svg/close.svg";
import arrowRight from "../../assets/images/icons/arrowRight.png";
import arrowLeft from "../../assets/images/icons/arrowLeft.png";

const Navbar = () => {
  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );
  const { searchResults, searchLoading } = useSelector(
    (state: RootState) => state.products
  );
  const { isLoggedin } = useSelector((state: RootState) => state.user);
  const { favs } = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.card);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showSubState, setShowSubState] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

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

  const showSub = (category: ICategory) => {
    category.children[0] && setShowSubState(category.name);
  };

  const hideSub = () => {
    setShowSubState("");
  };

  /* Search Part */
  const [searchResult, setSearcResult] = useState<IProduct[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [recentSearchs, setRecentSearchs] = useState<string[]>([]);
  const [term, setTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");

  /* Handling Input Changes */
  useEffect(() => {
    const termId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => clearInterval(termId);
  }, [term]);

  useEffect(() => {
    setSearcResult([]);
    if (debouncedTerm.length > 0) {
      dispatch(fetchSearchResults(debouncedTerm));
      !recentSearchs.includes(debouncedTerm) &&
        setRecentSearchs([debouncedTerm, ...recentSearchs]);
    }

    if (recentSearchs.length > 5) {
      setRecentSearchs(recentSearchs.slice(0, 5));
    }
  }, [debouncedTerm]);

  useEffect(() => {
    searchResults?.length > 0
      ? setSearcResult(searchResults)
      : setSearcResult([]);
  }, [searchResults]);

  /* Setting recentSearches To LocalStorage */
  useEffect(() => {
    const localTerms = localStorage.getItem("terms") || "";
    const parsedLocalTerms = localTerms && JSON.parse(localTerms);
    parsedLocalTerms?.length > 0 && setRecentSearchs(parsedLocalTerms);
  }, []);

  useEffect(() => {
    localStorage.setItem("terms", JSON.stringify(recentSearchs));
  }, [recentSearchs]);

  /* General */
  window.addEventListener("click", () => {
    setShowSearch(false);
    setTerm("");
  });

  useEffect(() => {
    setTimeout(() => {
      setShowSidebar(false);
      hideSub();
      setTerm("");
      setShowSearch(false);
      setSearcResult([]);
    }, 0);
  }, [location]);

  /* logging out user */
  const logout = () => {
    localStorage.removeItem("customerId");
    localStorage.removeItem("jwt");
    localStorage.removeItem("cartId");
    navigate("/login", { state: { message: "Hesabdan çıxdınız" } });
    dispatch(fetchCards());
    dispatch(getUser());
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
              <div>
                <img src={search} alt="search" />
              </div>
              <input
                onChange={(e) => setTerm(e.target.value)}
                type="text"
                value={term}
                placeholder="Axtarış..."
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSearch(true);
                }}
              />
              {showSearch &&
                searchResult?.length === 0 &&
                (debouncedTerm?.length === 0 && searchResult?.length === 0 ? (
                  <NavbarInputSearch onClick={(e) => e.stopPropagation()}>
                    <div>
                      <h2>Son axtarışlar</h2>
                      <p onClick={() => setRecentSearchs([])}>Təmizlə</p>
                    </div>
                    <div>
                      {recentSearchs?.map((recentSearch) => (
                        <div
                          key={Math.random()}
                          onClick={() => setTerm(recentSearch)}
                        >
                          <p>{recentSearch}</p>
                        </div>
                      ))}
                    </div>
                  </NavbarInputSearch>
                ) : (
                  <NavbarInputSearch onClick={(e) => e.stopPropagation()}>
                    <div>
                      <h2>Nəticələr</h2>
                      <p
                        onClick={() => {
                          setSearcResult([]);
                          setTerm("");
                        }}
                      >
                        Təmizlə
                      </p>
                    </div>
                    {searchLoading === "pending" ? (
                      <div style={{ display: "flex" }}>
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          width="84px"
                          height="84px"
                        />
                        <div style={{ width: "60%" }}>
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width="100%"
                            height="40px"
                          />
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width="100%"
                            height="40px"
                          />
                        </div>
                      </div>
                    ) : (
                      <p>Məhsul Tapılmadı</p>
                    )}
                  </NavbarInputSearch>
                ))}
              {showSearch && searchResult.length > 0 && (
                <NavbarInputSearch onClick={(e) => e.stopPropagation()}>
                  <div>
                    <h2>Nəticələr</h2>
                    <p
                      onClick={() => {
                        setSearcResult([]);
                        setTerm("");
                      }}
                    >
                      Təmizlə
                    </p>
                  </div>
                  {searchLoading !== "pending" ? (
                    searchResult.map((result) => (
                      <Link
                        to={`product/params/${result._id}`}
                        key={result._id}
                      >
                        <div>
                          <img src={result.image.url} alt="" />
                        </div>
                        <div>
                          <h2>{result.sku}</h2>
                          <p>Qiymət: {result.price.formatted_with_code}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div style={{ display: "flex" }}>
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        width="84px"
                        height="84px"
                      />
                      <div style={{ width: "60%" }}>
                        <Skeleton
                          variant="text"
                          animation="wave"
                          width="100%"
                          height="40px"
                        />
                        <Skeleton
                          variant="text"
                          animation="wave"
                          width="100%"
                          height="40px"
                        />
                      </div>
                    </div>
                  )}
                </NavbarInputSearch>
              )}
            </NavbarInput>
          </NavbarSearch>
          <NavbarRight>
            <div>
              <Link to="/userprofile/orders">
                <div>
                  <img src={person} alt="person" />
                </div>
                {isLoggedin ? <p>Hesab</p> : <p>Daxil Ol</p>}
              </Link>
              {isLoggedin ? (
                <ul>
                  <div></div>
                  <li>
                    <Link to="/userprofile/orders">Sifarişlərim</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/userprofile/personaldata">Şəxsi məl...</Link>
                  </li>
                  <hr />
                  <li onClick={() => logout()}>
                    <p>Çıxış</p>
                  </li>
                </ul>
              ) : (
                <ul>
                  <div></div>
                  <li>
                    <Link to="/login">Daxil ol</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/signup">Qeydiyyat</Link>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <Link to="/favorites">
                {favs.length === 0 ? (
                  <img src={heart} alt="heart" />
                ) : (
                  <img src={heartFull} alt="heartFull" />
                )}
              </Link>
            </div>
            <div>
              <Link to="/card">
                <div>
                  <img src={basket} alt="basket" />
                </div>
              </Link>
              {location.pathname !== "/card" && (
                <span>{items ? items?.total_unique_items : 0}</span>
              )}
            </div>
          </NavbarRight>
        </NavbarTop>
        {loading === "pending" ? (
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
              <li key={Math.random()} onClick={() => showSub(category)}>
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
                  className={`${
                    showSubState === category.name ? "active" : ""
                  }`}
                >
                  <Container>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        hideSub();
                      }}
                    >
                      <img src={arrowLeft} alt="arrowLeft" />
                    </div>
                    <ul>
                      {category.children.map((subcategory: ICategory) => (
                        <li key={Math.random()}>
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
