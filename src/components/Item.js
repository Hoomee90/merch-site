import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>In stock: <strong>{props.quantity}</strong></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.number,
  whenItemClicked: PropTypes.func
};

export default Item;