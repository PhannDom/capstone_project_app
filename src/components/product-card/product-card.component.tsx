import "./product-card.styles.scss";

import Button from "../button/button.component";
import { Product } from "models";

type Props = {
  product: Product;
};

const ProductCard = ({ product: { name, price, imageUrl } }: Props) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
