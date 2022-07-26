import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledProfileLinks } from "./styles/ProfileLinks.styled";

/* Images */
import basket from "../../../assets/images/icons/basket.png";
import person from "../../../assets/images/icons/person.png";

const ProfileLinks: FC = () => {
  const { pathname } = useLocation();

  const logout = () => {
    localStorage.removeItem("customerId");
  };

  return (
    <StyledProfileLinks>
      <h2>Profilim</h2>
      <ul>
        <li>
          <img src={basket} alt="basket" />
          <Link
            to="/userprofile/orders"
            style={
              pathname.slice(-1) === "s"
                ? { color: "#2dd06e" }
                : { color: "#4f4f4f" }
            }
          >
            Sifarişlərim
          </Link>
        </li>
        <li>
          <img src={person} alt="person" />
          <Link
            to="/userprofile/personaldata"
            style={
              pathname.slice(-1) === "a"
                ? { color: "#2dd06e" }
                : { color: "#4f4f4f" }
            }
          >
            Şəxsi məlumatlar
          </Link>
        </li>
        <li onClick={() => logout()}>
          <img src={person} alt="person" />
          <Link to="/userprofile">Çıxış</Link>
        </li>
      </ul>
    </StyledProfileLinks>
  );
};

export default ProfileLinks;
