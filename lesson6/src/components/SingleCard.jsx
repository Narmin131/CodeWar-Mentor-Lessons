import React from "react";

const SingleCard = ({ product }) => {
  return (
    <>
      <div className="col-lg-3 p-3">
        <div className="card" style={{ width: "100%", height:"100%" }}>
          <img src={product.image} className="card-img-top" alt="..." style={{width:"100%", height:"300px"}} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p>{product.price}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
