import { useContext } from "react";

import GlobalStyles from "@mui/joy/GlobalStyles";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";

import { CartItemType } from "models";

type Props = {
  cartItem: CartItemType;
};

const CheckoutItem = ({ cartItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <>
      <GlobalStyles
        styles={{
          "& .lucide": {
            color: "var(--Icon-color)",
            margin: "var(--Icon-margin)",
            fontSize: "var(--Icon-fontSize, 20px)",
            width: "1em",
            height: "1em",
          },
        }}
      />
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name"> {name} </span>
        <span className="quantity">
          {quantity === 1 ? (
            <Trash2 onClick={clearItemHandler} />
          ) : (
            <MinusCircle onClick={removeItemHandler} />
          )}
          {/* <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div> */}
          <span className="value">{quantity}</span>
          {/* <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div> */}
          <PlusCircle onClick={addItemHandler} />
        </span>
        <span className="price"> {price}</span>
        {/* <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div> */}
      </div>
    </>
  );
};

export default CheckoutItem;
