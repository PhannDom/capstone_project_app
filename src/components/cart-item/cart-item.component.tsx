import "./cart-item.styles.scss";
import { CartItemType } from "models";

type Props = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem: { name, price, imageUrl, quantity } }: Props) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
