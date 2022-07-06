import React from "react";
import { CardsStyled, CardTotal, SingleCard } from "./styles/Cards.styled";

/* Images */
import phone from "../../../assets/images/home/phone1.png";
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import del from "../../../assets/svg/delete.svg";

const Cards = () => {
  return (
    <CardsStyled>
      <div>
        <SingleCard>
          <img src={phone} alt="phone" />
          <div className="about">
            <h2>
              iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886
              0212042
            </h2>
            <div>
              <p>
                <span>Rəng:</span>
                <span>Bənövşəyi</span>
              </p>
              <p>
                <span>Price:</span>
                <span>300</span>
              </p>
            </div>
          </div>
          <div className="quantity">
            <img src={minus} alt="minus" />
            <span>1</span>
            <img src={plus} alt="plus" />
          </div>
          <img src={del} alt="delete" />
        </SingleCard>
        <SingleCard>
          <img src={phone} alt="phone" />
          <div className="about">
            <h2>
              iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886
              0212042
            </h2>
            <div>
              <p>
                <span>Rəng:</span>
                <span>Bənövşəyi</span>
              </p>
              <p>
                <span>Price:</span>
                <span>300</span>
              </p>
            </div>
          </div>
          <div className="quantity">
            <img src={minus} alt="minus" />
            <span>1</span>
            <img src={plus} alt="plus" />
          </div>
          <img src={del} alt="delete" />
        </SingleCard>
        <SingleCard>
          <img src={phone} alt="phone" />
          <div className="about">
            <h2>
              iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886
              0212042
            </h2>
            <div>
              <p>
                <span>Rəng:</span>
                <span>Bənövşəyi</span>
              </p>
              <p>
                <span>Price:</span>
                <span>300</span>
              </p>
            </div>
          </div>
          <div className="quantity">
            <img src={minus} alt="minus" />
            <span>1</span>
            <img src={plus} alt="plus" />
          </div>
          <img src={del} alt="delete" />
        </SingleCard>
      </div>
      <CardTotal>
        <h2>Ümumi</h2>
        <p>
          <span>Məbləğ</span>
          <span>66.5</span>
        </p>
        <p>
          <span>Çatdırılma</span>
          <span>66.5</span>
        </p>
        <p>
          <span>Cəmi</span>
          <span>66.5</span>
        </p>
      </CardTotal>
    </CardsStyled>
  );
};

export default Cards;
