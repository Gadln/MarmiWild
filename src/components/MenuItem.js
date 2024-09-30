import { useState } from "react";

function MenuItem({
  foodItem: { itemName, description, price, isFavorite, foodImage },
}) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  const [isFavorite, setIsFavorite] = useState(0);

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        <img src={foodItem.foodImage} alt={foodItem.description} />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{foodItem.itemName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{foodItem.description}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <aside>{foodItem.price} EUR</aside>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button type="button">{}</button>
    </section>
  );
}

export default MenuItem;
