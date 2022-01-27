import axios from "axios";
import { useState, useEffect } from "react";
import Cocktail from "../Components/Cocktail";

function CategoryPage({ strCategory }) {
  const [cocktailList, setCocktailList] = useState(null);

  async function getCocktails() {
    const cockResponse = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    // console.log(cockResponse);
    setCocktailList(cockResponse.data.drinks);
  }

  useEffect(() => {
    getCocktails();
  }, []);

  //console.log("what is cocktailList", cocktailList);

  return (
    <div>
      {cocktailList
        ? cocktailList.map((cocktail) => {
            return (
              <div>
                <Cocktail
                  className="cockButton"
                  strCategory={cocktail.strCategory}
                />
              </div>
            );
          })
        : "Loading.."}
    </div>
  );
}

export default CategoryPage;
