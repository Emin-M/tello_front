import { FC, useState } from "react";
import { CardsStyled, CardTotal, SingleCard } from "./styles/Cards.styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { ILineItem } from "../../../modules/types/card";
import {
  deleteItemFromCart,
  updateItemInCart,
} from "../../../redux/actions/cardActions";
import { Button, Modal, Spinner } from "react-bootstrap";

/* Images */
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import del from "../../../assets/svg/delete.svg";

const Cards: FC = () => {
  const { items, updateLoading } = useSelector(
    (state: RootState) => state.card
  );
  const dispatch = useDispatch<AppDispatch>();
  const [modal, setModal] = useState<boolean>(false);
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
                      <span>Xüsusiyyətləri:</span>
                      <span>
                        {item.variant ? item.variant.sku.toUpperCase() : "---"}
                      </span>
                    </p>
                    <p>
                      <span>Qiyməti:</span>
                      <span>{item.price.formatted_with_code}</span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="quantity">
                <div
                  onClick={() => {
                    updateCard("-", item.id, item.quantity);
                    setIdForDel(item.id);
                    setNameForDel(item.name);
                    setUpdateId(item.id);
                  }}
                >
                  <img src={minus} alt="minus" />
                </div>
                <span>
                  {updateLoading && updateId === item.id ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    item.quantity
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
                onClick={() => {
                  setModal(true);
                  setIdForDel(item.id);
                  setNameForDel(item.name);
                }}
              >
                <img src={del} alt="delete" />
              </div>
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
          Silmək istədiyinizə əminsiniz?: <b>{nameForDel}</b>
        </Modal.Body>

        <Modal.Footer>
          <Button
            rel="noreferrer"
            variant="danger"
            disabled
            onClick={() => setModal(false)}
          >
            Geri
          </Button>
          <Button
            rel="noreferrer"
            variant="primary"
            disabled
            onClick={() => {
              dispatch(deleteItemFromCart(idForDel));
              setModal(false);
            }}
          >
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cards;
