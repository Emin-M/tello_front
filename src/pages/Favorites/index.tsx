import { FC, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { EmptyFavs, StyledFavorites } from "./style";
import Card from "../../components/ReusuableComponents/Card";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import { clearFavorite } from "../../redux/reducers/favoritesSlice";

const Favorites: FC = () => {
  const { favs } = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch<AppDispatch>();

  /* settings */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledFavorites>
      <Container>
        <div>
          <h2>Favorilərim</h2>
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
              onClick={() => {
                dispatch(clearFavorite());
              }}
            >
              Favoriləri təmizlə
            </MenuItem>
          </Menu>
        </div>
        {favs?.length === 0 ? (
          <EmptyFavs>
            <h2>Favoriləriniz boşdur</h2>
          </EmptyFavs>
        ) : (
          <div className="favs">
            {favs.map((item) => (
              <Card key={item.id} product={item} sku={item.sku} />
            ))}
          </div>
        )}
      </Container>
    </StyledFavorites>
  );
};

export default Favorites;
