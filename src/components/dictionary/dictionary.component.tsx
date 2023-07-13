import CategoryItem from "../category-item/category-item.component";
import { Category } from "../../models";

import "./directory.styles.scss";

type Props = {
  categories: Category[];
};

const Directory = (props: Props) => {
  const { categories } = props;

  return (
    <div className="directory-container">
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
