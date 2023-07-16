import React from "react";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button buttonType="none">CHECK OUT</Button>
  </div>
);

export default CartDropdown;
