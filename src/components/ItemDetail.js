import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <h2>{item.name}</h2>
      <h4>In stock: {item.quantity}</h4>
      <p>{item.description}</p>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;