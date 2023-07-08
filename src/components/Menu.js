import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "./data";

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas ? (
        <React.Fragment>
          <p>
            Enjoy 6 delicious and organic Italian dishes cooked in our stone
            oven.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later:)</p>
      )}
    </main>
  );
}

export default Menu;
