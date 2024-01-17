import { createContext } from "react";
import { useReducer } from "react";
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const mealID = state.items.findIndex(
        (meal) => meal.id === action.meal.id
      );
      const updateItems = [...state.items];
      if (mealID > -1) {
        const currMeal = state.items[mealID];
        const updateItem = {
          ...currMeal,
          quantity: currMeal.quantity + 1,
        };
        updateItems[mealID] = updateItem;
      } else {
        updateItems.push({ ...action.meal, quantity: 1 });
      }
      return { ...state, items: updateItems };
    }
    case "DEL_ITEM": {
      const mealID = state.items.findIndex(
        (meal) => meal.id === action.meal.id
      );
      const updateItems = [...state.items];
    }
    default:
      return state;
  }
}
export const cartContext = createContext({
  items: [],
  addMealToCart: (item) => {},
});

export default function ProjectsContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  function addMealToCart(meal) {
    dispatchCartAction({ type: "ADD_ITEM", meal: meal });
  }
  function deleteMealFromCart(meal) {
    dispatchCartAction({ type: "DEL_ITEM", meal: meal });
  }

  const ctxValue = {
    items: cart.items,
    addMealToCart: addMealToCart,
  };
  console.log(cart.items);
  return (
    <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>
  );
}
