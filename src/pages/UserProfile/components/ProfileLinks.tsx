import React, { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StyledProfileLinks } from "./styles/ProfileLinks.styled";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import api from "../../../api/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { fetchCards } from "../../../redux/actions/cardActions";
import { getUser } from "../../../redux/actions/userActions";

/* Images */
import basket from "../../../assets/images/icons/basket.png";
import person from "../../../assets/images/icons/person.png";
import log_out from "../../../assets/svg/log-out.svg";
import SimpleModal from "../../../components/ReusuableComponents/Modal";

/* Modal Styles */
const styleButtonGroup = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "20px",
};

const ProfileLinks: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /* logging out user */
  const logout = () => {
    localStorage.removeItem("customerId");
    localStorage.removeItem("cartId");
    localStorage.removeItem("jwt");
    navigate("/login", { state: { message: "Hesabdan çıxdınız" } });
    dispatch(fetchCards());
    dispatch(getUser());
  };

  /* deleting user */
  const deleteUser = async () => {
    try {
      await api.delete("/customers");
      localStorage.removeItem("customerId");
      localStorage.removeItem("cartId");
      localStorage.removeItem("jwt");
      navigate("/signup", {
        state: {
          message: "Hesabıbız uğurla silindi",
        },
      });
      dispatch(fetchCards());
      dispatch(getUser());
    } catch (error) {
      console.log(error);
    }
  };

  /* settings part */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledProfileLinks>
      <div>
        <h2>Profilim</h2>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <SettingsIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
              setModal(true);
            }}
          >
            Hesabı sil
          </MenuItem>
        </Menu>
      </div>
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
          <img src={log_out} alt="log_out" />
          <Link to="/userprofile">Çıxış</Link>
        </li>
      </ul>
      <SimpleModal
        modalHeader="Hesabı Silmək!"
        modalTitle="Hesabı Silmək istədiyinizə əminsiniz?"
        modal={modal}
        setModal={setModal}
      >
        <ButtonGroup sx={styleButtonGroup} disableElevation variant="contained">
          <Button color="secondary" onClick={() => setModal(false)}>
            Geri
          </Button>
          <Button
            color="success"
            onClick={() => {
              setModal(false);
              deleteUser();
            }}
          >
            Sil
          </Button>
        </ButtonGroup>
      </SimpleModal>
    </StyledProfileLinks>
  );
};

export default ProfileLinks;
