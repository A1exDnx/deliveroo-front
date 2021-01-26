import React from "react";

const Product = (props) => {
  const { categories, products, setProducts } = props;

  return (
    <>
      <div className="product-section">
        {categories.map((card, index) => {
          return (
            <div
              key={card.id}
              className="product-box bg-white"
              onClick={() => {
                const newProducts = [...products];
                let isFound = false;
                for (let i = 0; i < products.length; i++) {
                  if (products[i].id === card.id) {
                    newProducts[i].quantity++;
                    isFound = true;
                    break;
                  }
                }
                if (isFound === false) {
                  newProducts.push({
                    id: card.id,
                    title: card.title,
                    price: card.price,
                    quantity: 1,
                  });
                }
                setProducts(newProducts);
              }}
            >
              <div className="product-text">
                <h3>{card.title}</h3>
                <p className="product-desc">{card.description}</p>
                <div className="bot-box-product">
                  <p className="price">
                    {Number(card.price).toFixed(2).replace(".", ",")} €
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
          );
        })}
      </div>
    </>
  );
};

export default Product;
