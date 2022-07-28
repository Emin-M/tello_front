import React, { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StyledProfileLinks } from "./styles/ProfileLinks.styled";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import api from "../../../api/api";

/* Images */
import basket from "../../../assets/images/icons/basket.png";
import person from "../../../assets/images/icons/person.png";
import log_out from "../../../assets/svg/log-out.svg";

/* Modal Styles */
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 54,
  p: 4,
};

const styleButtonGroup = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "20px",
};

const ProfileLinks: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /* logging out user */
  const logout = () => {
    localStorage.removeItem("customerId");
    localStorage.removeItem("cartId");
    navigate("/login", { state: { message: "Hesabdan çıxdınız" } });
  };

  /* deleting user */
  const deleteUser = async () => {
    const id = localStorage.getItem("customerId");
    try {
      await api.delete(`/customers/${id}`);
      localStorage.removeItem("customerId");
      localStorage.removeItem("cartId");
      navigate("/signup", {
        state: {
          message: "Hesabıbız uğurla silindi",
        },
      });
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
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ pb: 2, borderBottom: "1px solid black" }}
            id="keep-mounted-modal-title"
            variant="h5"
            component="h2"
          >
            Hesabı Silmək!
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            variant="h6"
            sx={{ mt: 2 }}
          >
            Hesabı Silmək istədiyinizə əminsiniz?
          </Typography>
          <ButtonGroup
            sx={styleButtonGroup}
            disableElevation
            variant="contained"
          >
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
        </Box>
      </Modal>
    </StyledProfileLinks>
  );
};

export default ProfileLinks;
