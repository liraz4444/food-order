import { useState } from "react";
import { styled } from "styled-components";
import Cart from "./Cart";
export default function Header() {
  const [state, setState] = useState(false);
  let content;
  function handleClick() {
    setState(true);
  }
  content = (
    <Container>
      <h1>Order-Food-App</h1>
      <button onClick={handleClick}>CART (0)</button>
    </Container>
  );
  if (state) {
    content = <Cart></Cart>;
  }
  return <>{content}</>;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
