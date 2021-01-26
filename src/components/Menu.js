import React from "react";
import Product from "./Product";

const Menu = (props) => {
  const { categories, products, setProducts } = props;

  const meals = categories.filter((item) => item.meals.length > 0);

  return (
    <>
      <div className="left">
        <div>
          {meals.map((elem) => {
            return (
              <div key={elem.name} className="category-box">
                <div>
                  <h2>{elem.name}</h2>
                </div>
                <Product
                  categories={elem.meals}
                  products={products}
                  setProducts={setProducts}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
