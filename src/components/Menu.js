import React from "react";
import Product from "./Product";

const Menu = (props) => {
  const { categories } = props;

  const meals = categories.filter((item) => item.meals.length > 0);

  return (
    <>
      <div className="left">
        <div>
          {meals.map((elem, index) => {
            return (
              <>
                <div className="category-box">
                  <div>
                    <h2>{elem.name}</h2>
                  </div>
                  <Product meals={elem.meals} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
