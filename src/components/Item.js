import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>In stock: <strong>{props.quantity}</strong></p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default Item;