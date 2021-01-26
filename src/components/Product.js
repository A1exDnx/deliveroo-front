import React from "react";

const Product = (props) => {
  const { categories, products, setProducts } = props;

  //   function replace_decimal(decimal) {
  //     return decimal.replace(".", ",");
  //   }

  return (
    <>
      <div className="product-section">
        {categories.map((card) => {
          return (
            <div
              key={card.id}
              className="product-box bg-white"
              onClick={() => {
                //créer une copie
                const newProducts = [...products];

                //rechercher dans products, si le produit n'a pas deja ete ajouté
                let isFound = false;
                for (let i = 0; i < products.length; i++) {
                  if (products[i].id === card.id) {
                    newProducts[i].quantity++;
                    isFound = true;
                    break;
                  }
                }

                if (isFound === false) {
                  // modifier la copie

                  newProducts.push({
                    id: card.id,
                    title: card.title,
                    price: card.price,
                    quantity: 1,
                  });
                }

                // mettre à jour le state
                setProducts(newProducts);
              }}
            >
              <div className="product-text">
                <h3>{card.title}</h3>
                <p className="product-desc">{card.description}</p>
                <div className="bot-box-product">
                  {/* <p className="price">{replace_decimal(card.price) + " €"}</p> */}
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
