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
                <div key={product.id} className="product-line">
                  <div className="more-less-box">
                    <button
                      className="btn-basket"
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
                    <p className="quantity-basket">{product.quantity}</p>
                    <button
                      className="btn-basket more"
                      onClick={() => {
                        const newProducts = [...products];
                        newProducts[index].quantity++;
                        setProducts(newProducts);
                      }}
                    >
                      +
                    </button>
                    <p className="product-basket">{product.title}</p>
                  </div>

                  <p className="price-basket">
                    {(product.price * products[index].quantity)
                      .toFixed(2)
                      .replace(".", ",")}{" "}
                    €
                  </p>
                </div>
              );
            })}
            <hr></hr>
            <div className="calcul-section">
              <div className="subtotal-basket">
                <p>Sous - total :</p>
                <p> {sousTotal.toFixed(2).replace(".", ",")} €</p>
              </div>
              <div className="subtotal-basket">
                <p>Frais de livraison : </p>
                <p>{fraisLiv.toFixed(2).replace(".", ",")} €</p>
              </div>
              <div className="subtotal-basket">
                <p>Frais de service (pour Alex) : </p>
                <p>{taxeAlex.toFixed(2).replace(".", ",")} €</p>
              </div>
            </div>
            <div className="total-section">
              <div className="total-basket">
                <p>Total : </p>
                <p>{total.toFixed(2).replace(".", ",")} €</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
