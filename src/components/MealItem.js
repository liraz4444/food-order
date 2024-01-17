import { useContext, useReducer } from "react";
import { styled } from "styled-components";
import { cartContext } from "../store/project-context";

export default function MealItem({ meal }) {
  const { addMealToCart } = useContext(cartContext);

  function handleAddClick(meal) {
    addMealToCart(meal);
  }

  return (
    <CardItem key={meal.id}>
      <img src={meal.image}></img>
      <h2>{meal.name}</h2>
      <button>{meal.price}</button>
      <p>{meal.description}</p>
      <button onClick={() => handleAddClick(meal)}>Add to card</button>
    </CardItem>
  );
}
const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 200px;
    height: 200px;
  }
`;
