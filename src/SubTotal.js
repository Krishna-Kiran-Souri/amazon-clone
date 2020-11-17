import React from "react";

import "./SubTotal.css";

import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  var value = 0;
  if (basket.length === 0) {
    value = 0;
  } else {
    for (let i = 0; i < basket.length; i++) {
      value += parseFloat(basket[i].price);
    }
  }

  console.log("this is a value" + value.toString());
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={value}
        renderText={(value) => (
          <>
            <p>
              Subtotal (<span>{basket.length}</span> items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <p>{value}</p>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
