import { useContext } from "react";

import "./product-card.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductType } from "models";

import { CartContext } from "../../contexts/cart.context";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
