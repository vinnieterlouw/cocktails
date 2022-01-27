import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ strCategory }) {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const category = strCategory;
    const categoryNoSpace = category.replace(/ /g, "_");
    setCategory(encodeURIComponent(categoryNoSpace));
  }, []);

  return (
    <div>
      {" "}
      <Link to={`${category}`}>
        {" "}
        <h3>{strCategory}</h3>{" "}
      </Link>
    </div>
  );
}
