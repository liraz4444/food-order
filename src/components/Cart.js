import { useContext, useState } from "react";
import { cartContext } from "../store/project-context";
export default function Cart() {
  const { items } = useContext(cartContext);
  return (
    <>
      <dialog open>
        <h2>My Cart</h2>
        <ul>
          {items.map((meal) => (
            <span>
              <li key={meal.id}>{meal.name}</li>
              <button>+</button>
              <button>-</button>
            </span>
          ))}
        </ul>

        <button>Close</button>
        <button>Go to Checkout</button>
      </dialog>
    </>
  );
}
