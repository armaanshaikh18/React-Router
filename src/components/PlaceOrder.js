import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Placed!</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
};

export default PlaceOrder;
