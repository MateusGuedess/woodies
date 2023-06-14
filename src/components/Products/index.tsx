import React from "react";
import Image from "next/image";
import { Container } from "./style";

function Products() {
  return (
    <Container>
      <div className="product">
        <p className="product__title">Book Shelf</p>
        <Image
          src="/bookShelf.svg"
          alt="bookShelf"
          width={148.81663513183594}
          height={235}
          className="product__image"
        />
        <button className="product__button">Shop Now</button>
      </div>
    </Container>
  );
}

export default Products;
