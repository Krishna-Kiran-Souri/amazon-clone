import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((_, i) => {
              if (i < rating) {
                return (
                  <p>
                    <GradeIcon className="product__good" />
                  </p>
                );
              }

              return <GradeIcon className="product__bad" />;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
