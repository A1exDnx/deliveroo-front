import React from "react";
import Menu from "./Menu";
import Basket from "./Basket";

const Content = (props) => {
  const { categories, products, setProducts } = props;

  return (
    <>
      <div className="container">
        <div className="content">
          <Menu
            categories={categories}
            products={products}
            setProducts={setProducts}
          />
          <Basket products={products} setProducts={setProducts} />
        </div>
      </div>
    </>
  );
};

export default Content;
