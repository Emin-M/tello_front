import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";

/* Images */
import arrowRight from "../../assets/images/icons/arrowRight.png";
import productPhone from "../../assets/images/home/product-phone.png";
import productWatch from "../../assets/images/home/product-watch.png";
import productAccessory from "../../assets/images/home/product-accessory.png";

/* Styles */
import { Product, ProductContainer } from "./Styles/Products";

const Products: FC = () => {
  return (
    <ProductContainer>
      <Container>
        <Product>
          <h2>Telefon</h2>
          <p>Məhsul sayı: 322</p>
          <Link to="phones">
            Məhsullara keçid <img src={arrowRight} alt="arrowRight" />
          </Link>
          <img
            style={{ width: "95%", right: "0" }}
            src={productPhone}
            alt="productPhone"
          />
        </Product>
        <Product>
          <h2>Telefon</h2>
          <p>Məhsul sayı: 322</p>
          <Link to="accessory">
            Məhsullara keçid <img src={arrowRight} alt="arrowRight" />
          </Link>
          <img style={{ width: "40%" }} src={productWatch} alt="productWatch" />
        </Product>
        <Product>
          <h2>Telefon</h2>
          <p>Məhsul sayı: 322</p>
          <Link to="accessory">
            Məhsullara keçid <img src={arrowRight} alt="arrowRight" />
          </Link>
          <img
            style={{ width: "50%" }}
            src={productAccessory}
            alt="productAccessory"
          />
        </Product>
      </Container>
    </ProductContainer>
  );
};

export default Products;
