import React from "react";
import Menu from "./Menu";

const Content = (props) => {
  const { categories } = props;

  return (
    <>
      <div className="container">
        <div className="content">
          <Menu categories={categories} />
          <div className="right basket">
            <div className="bg-white cart">
              <button>Valider mon panier</button>
              <div className="checkout">
                <p>Votre panier est vide..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
