import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

export default function CocktailImage() {
  const [images, setImages] = useState(null);
  const routeParams = useParams();

  async function getImage() {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${routeParams.image}`
    );
    // console.log("what is response", response.data.drinks);
    setImages(response.data.drinks);
  }

  useEffect(() => {
    getImage();
  });

  console.log("what is images", images);

  return images ? (
    <div>
      <p>Cocktail’s</p>
      {images.map((image) => (
        <span>
          <img src={image.strDrinkThumb} alt="images" />
        </span>
      ))}
    </div>
  ) : (
    <p>Loading ...</p>
  );
}
