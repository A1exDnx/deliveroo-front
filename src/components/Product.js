import React from "react";

const Product = (props) => {
  const { meals } = props;

  function replace_decimal(decimal) {
    return decimal.replace(".", ",");
  }

  return (
    <>
      <div className="product-section">
        {meals.map((card, index2) => {
          return (
            <>
              <div className="product-box bg-white">
                <div class="product-text">
                  <h3>{card.title}</h3>
                  <p className="product-desc">{card.description}</p>
                  <div className="bot-box-product">
                    <p className="price">
                      {replace_decimal(card.price) + " €"}
                    </p>
                    <p className="popularity">
                      {card.popular === true ? "★ Populaire" : ""}
                    </p>
                  </div>
                </div>

                <img
                  className={card.picture ? "img-produit" : "d-none"}
                  src={card.picture ? card.picture : ""}
                  alt={card.title}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
