import React from "react";
import ProductDetail_HeroSectionView from "../view";

export default function ProductDetail_HeroSectionContainer({ product_id }) {
  return (
    <>
      <ProductDetail_HeroSectionView product_id={product_id} />
    </>
  );
}
