import React from "react";
import { Link } from "react-router-dom";
import { StyledProfileLinks } from "./styles/ProfileLinks.styled";

/* Images */
import basket from "../../../assets/images/icons/basket.png";
import person from "../../../assets/images/icons/person.png";

const ProfileLinks = () => {
  return (
    <StyledProfileLinks>
      <h2>Profilim</h2>
      <ul>
        <li>
          <img src={basket} alt="basket" />
          <Link to="/userprofile/orders">Sifarişlərim</Link>
        </li>
        <li>
          <img src={person} alt="person" />
          <Link to="/userprofile/personaldata">Şəxsi məlumatlar</Link>
        </li>
        <li>
          <img src={person} alt="person" />
          <Link to="/userprofile">Çıxış</Link>
        </li>
      </ul>
    </StyledProfileLinks>
  );
};

export default ProfileLinks;
