import { FC, useState } from "react";
import { CardsStyled, CardTotal, SingleCard } from "./styles/Cards.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { ILineItem } from "../../../modules/types/card";
import {
  deleteItemFromCart,
  fetchCards,
  updateItemInCart,
} from "../../../redux/actions/cardActions";
import { alertError, alertSuccess } from "../../../modules/alert";
import { Button, Modal } from "react-bootstrap";

/* Images */
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import del from "../../../assets/svg/delete.svg";

const Cards: FC = () => {
  const { items } = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch<AppDispatch>();
  const [modal, setModal] = useState<boolean>(false);
  const [idForDel, setIdForDel] = useState<string>("");
  const [nameForDel, setNameForDel] = useState<string>("");

  const updateCard = (sign: string, id: string, q: number) => {
    let quantity = q;
    if (sign === "-") {
      quantity = q - 1;
      if (quantity > 0) {
        dispatch(updateItemInCart({ id, quantity }));
        alertSuccess("Məhsul azaldıldı!");
        setTimeout(() => {
          dispatch(fetchCards());
        }, 1000);
      } else {
        setModal(true);
      }
    } else {
      quantity = q + 1;
      dispatch(updateItemInCart({ id, quantity }));
      alertSuccess("Məhsul artırıldı!");
      setTimeout(() => {
        dispatch(fetchCards());
      }, 1000);
    }
  };

  return (
    <>
      <CardsStyled>
        <div>
          {items?.line_items.map((item: ILineItem) => (
            <SingleCard key={item.id}>
              <img src={item.image.url} alt={item.name} />
              <div className="about">
                <h2>{item.name}</h2>
                <div>
                  <p>
                    <span>Rəng:</span>
                    <span>Bənövşəyi</span>
                  </p>
                  <p>
                    <span>Price:</span>
                    <span>{item.price.formatted_with_code}</span>
                  </p>
                </div>
              </div>
              <div className="quantity">
                <img
                  src={minus}
                  alt="minus"
                  onClick={() => {
                    updateCard("-", item.id, item.quantity);
                    setIdForDel(item.id);
                    setNameForDel(item.name);
                  }}
                />
                <span>{item.quantity}</span>
                <img
                  src={plus}
                  alt="plus"
                  onClick={() => updateCard("+", item.id, item.quantity)}
                />
              </div>
              <img
                src={del}
                alt="delete"
                onClick={() => {
                  setModal(true);
                  setIdForDel(item.id);
                  setNameForDel(item.name);
                }}
              />
            </SingleCard>
          ))}
        </div>
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
      </CardsStyled>
      <Modal
        className="modal-header"
        show={modal}
        onHide={() => setModal(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Silmək: <b>{nameForDel}</b>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Silmək istədiyinizə əminsiniz: <b>{nameForDel}</b>
        </Modal.Body>

        <Modal.Footer>
          <Button
            rel="noreferrer"
            variant="danger"
            disabled
            onClick={() => setModal(false)}
          >
            Cancel
          </Button>
          <Button
            rel="noreferrer"
            variant="primary"
            disabled
            onClick={() => {
              dispatch(deleteItemFromCart(idForDel));
              setTimeout(() => {
                dispatch(fetchCards());
              }, 1000);
              setModal(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cards;
