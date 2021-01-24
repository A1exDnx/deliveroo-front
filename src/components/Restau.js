import React from "react";

const Restau = (props) => {
  const { restau } = props;

  const cat = (tab) => {
    const str = tab.join(" - ");
    return str;
  };
  return (
    <>
      <div className="bg-white">
        <div class="container restau">
          <div className="left">
            <h1>{restau.name}</h1>
            <p>{cat(restau.categories)}</p>
            <p>{restau.address}</p>
            <p className="desc-restaurant">{restau.description}</p>
          </div>
          <img className="img-restau" alt="{path}" src={restau.picture} />
        </div>
      </div>
    </>
  );
};

export default Restau;
