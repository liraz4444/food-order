import { styled } from "styled-components";
import { meals } from "../data";
import MealItem from "./MealItem";

export default function Main() {
  return (
    <>
      <Container>
        <H1>THE MENU</H1>
        <ContainerMenu>
          {meals.map((meal) => (
            <MealItem meal={meal} />
          ))}
        </ContainerMenu>
      </Container>
    </>
  );
}

const Container = styled.div`
  //width: 50%;
  margin-left: 200px;
  margin-right: 200px;
`;
const ContainerMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Adjust the gap as needed */
  padding: 0;
  width: 100%;
`;
const H1 = styled.h1`
  text-align: center;
`;
