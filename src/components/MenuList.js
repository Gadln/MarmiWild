import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {/* render a MenuItem component for each element of the foodItems array */}
      {foodItems.map((foodItem) => (
        <MenuItem
          key={foodItem.id}
          id={foodItem.id}
          itemName={foodItem.itemName}
          description={foodItem.description}
          price={foodItem.price}
          isFavorite={foodItem.isFavorite}
        />
      ))}
    </>
  );
}

export default MenuList;
