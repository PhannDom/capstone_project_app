import CategoryItem from "../category-item/category-item.component";
import { CategoryType } from "../../models";

import "./directory.styles.scss";

type Props = {
  categories: CategoryType[];
};

const Directory = (props: Props) => {
  const { categories } = props;

  return (
    <div className="directory-container">
      {categories.map((category: CategoryType) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
