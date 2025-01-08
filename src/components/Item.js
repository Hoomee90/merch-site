import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const inStock = props.quantity > 0;

  return (
    <div onClick={() => props.whenItemClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      {inStock
        ? <p>In stock: <strong>{props.quantity}</strong></p>
        : <p><strong>Out of stock</strong></p>
      }
      <hr />
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;