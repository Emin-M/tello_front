import { FC, useState } from "react";
import {
  CardRight,
  CardsStyled,
  CardTotal,
  SingleCard,
} from "./styles/Cards.styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { ILineItem } from "../../../modules/types/card";
import {
  deleteItemFromCart,
  emptyCard,
  updateItemInCart,
} from "../../../redux/actions/cardActions";
import { Button, ButtonGroup, CircularProgress } from "@mui/material";

/* Images */
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import del from "../../../assets/svg/delete.svg";
import SimpleModal from "../../../components/ReusuableComponents/Modal";

/* Modal Button Styles */
const styleButtonGroup = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "20px",
};

const Cards: FC = () => {
  const { items, updateLoading } = useSelector(
    (state: RootState) => state.card
  );
  const dispatch = useDispatch<AppDispatch>();
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [idForDel, setIdForDel] = useState<string>("");
  const [nameForDel, setNameForDel] = useState<string>("");
  const [updateId, setUpdateId] = useState<string>("");

  /* Updating Card */
  const updateCard = (sign: string, id: string, q: number) => {
    let quantity = q;
    if (sign === "-") {
      quantity = q - 1;
      if (quantity > 0) {
        dispatch(updateItemInCart({ id, quantity }));
      } else {
        setModal(true);
      }
    } else {
      quantity = q + 1;
      dispatch(updateItemInCart({ id, quantity }));
    }
  };

  window.addEventListener("click", () => {
    setModal(false);
    setModal2(false);
  });

  return (
    <>
      <CardsStyled>
        <div>
          {items?.line_items.map((item: ILineItem) => (
            <SingleCard key={item.id}>
              <div className="img">
                <Link to={`/product/params/${item.product_id}`}>
                  <img src={item?.image?.url} alt={item.name} />
                </Link>
              </div>
              <div className="about">
                <Link to={`/product/params/${item.product_id}`}>
                  <h2>
                    {item.variant?.description
                      ? item.variant?.description
                      : item.name}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>
                      <span>Qiyməti:</span>
                      <span>{item.price.formatted_with_code}</span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="quantity">
                <div
                  onClick={(e) => {
                    updateCard("-", item.id, item.quantity);
                    setIdForDel(item.id);
                    setUpdateId(item.id);
                    e.stopPropagation();
                    item.variant
                      ? setNameForDel(item.variant?.description)
                      : setNameForDel(item.name);
                  }}
                >
                  <img src={minus} alt="minus" />
                </div>
                <span>
                  {updateLoading === "pending" && updateId === item.id ? (
                    <CircularProgress
                      color="inherit"
                      sx={{ margin: "0 20px" }}
                    />
                  ) : (
                    <p>{item.quantity}</p>
                  )}
                </span>
                <div
                  onClick={() => {
                    updateCard("+", item.id, item.quantity);
                    setUpdateId(item.id);
                  }}
                >
                  <img src={plus} alt="plus" />
                </div>
              </div>
              <div
                className="delete"
                onClick={(e) => {
                  setModal(true);
                  setIdForDel(item.id);
                  e.stopPropagation();
                  item.variant
                    ? setNameForDel(item.variant?.description)
                    : setNameForDel(item.name);
                }}
              >
                <img src={del} alt="delete" />
              </div>
            </SingleCard>
          ))}
        </div>
        <CardRight>
          <CardTotal>
            <h2>Ümumi</h2>
            <p>
              <span>Məbləğ</span>
              <span>{items?.subtotal.formatted_with_code}</span>
            </p>
            <p>
              <span>Çatdırılma</span>
              <span>0.00 USD</span>
            </p>
            <p>
              <span>Cəmi</span>
              <span>{items?.subtotal.formatted_with_code}</span>
            </p>
          </CardTotal>
          <button
            onClick={(e) => {
              setModal2(true);
              e.stopPropagation();
            }}
          >
            Səbəti təmizlə
          </button>
          <button>Səbəti təsdiqlə</button>
        </CardRight>
      </CardsStyled>
      <SimpleModal
        modalHeader={`Silmək: ${nameForDel}`}
        modalTitle={`Silmək istədiyinizə əminsiniz?: ${nameForDel}`}
        modal={modal}
        setModal={setModal}
      >
        <ButtonGroup sx={styleButtonGroup} disableElevation variant="contained">
          <Button color="primary" onClick={() => setModal(false)}>
            Geri
          </Button>
          <Button
            color="success"
            onClick={() => {
              dispatch(deleteItemFromCart(idForDel));
              setModal(false);
            }}
          >
            Sil
          </Button>
        </ButtonGroup>
      </SimpleModal>
      <SimpleModal
        modalHeader="Səbəti Boşaltmaq!"
        modalTitle="Səbəti boşaltmaq istədiyinizə əminsiniz?"
        modal={modal2}
        setModal={setModal2}
      >
        <ButtonGroup sx={styleButtonGroup} disableElevation variant="contained">
          <Button color="secondary" onClick={() => setModal2(false)}>
            Geri
          </Button>
          <Button
            color="success"
            onClick={() => {
              dispatch(emptyCard());
              setModal2(false);
            }}
          >
            Sil
          </Button>
        </ButtonGroup>
      </SimpleModal>
    </>
  );
};

export default Cards;
