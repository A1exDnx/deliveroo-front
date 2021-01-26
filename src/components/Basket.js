import React from "react";

const Basket = (props) => {
  const { products, setProducts } = props;

  let sousTotal = 0;
  for (let i = 0; i < products.length; i++) {
    sousTotal = sousTotal + Number(products[i].price) * products[i].quantity;
  }

  let total = 0;
  let fraisLiv = 2.5;
  let taxeAlex = 3.0;
  total = sousTotal + fraisLiv + taxeAlex;

  const emptyBasket = products.length === 0;

  //   function replace_decimal(decimal) {
  //     return decimal.replace(".", ",");
  //   }

  return (
    <div className="right basket">
      <div className="bg-white cart">
        <button className={"basket" + (emptyBasket ? " empty" : " valid")}>
          Valider mon panier
        </button>
        {emptyBasket ? (
          <div className="checkout">
            <p>Votre panier est vide..</p>
          </div>
        ) : (
          <div className="checkout">
            {products.map((product, index) => {
              return (
                <div key={product.id}>
                  <button
                    onClick={() => {
                      const newProducts = [...products];
                      if (newProducts[index].quantity === 1) {
                        newProducts.splice(index, 1);
                      } else {
                        newProducts[index].quantity--;
                      }
                      setProducts(newProducts);
                    }}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => {
                      const newProducts = [...products];
                      newProducts[index].quantity++;
                      setProducts(newProducts);
                    }}
                  >
                    +
                  </button>
                  {product.title}
                  <p>
                    {/* {product.price * products[index].quantity.toFixed(2) + " €"} */}
                    {product.price}
                  </p>
                  {/* {replace_decimal(product.price * products[index].quantity)} */}
                </div>
              );
            })}
            <p>Sous - total : {sousTotal.toFixed(2)}</p>
            <p>Frais de livraison : {fraisLiv}</p>
            <p>Frais de service (pour Alex) : {taxeAlex}</p>
            <p>Total : {total.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
