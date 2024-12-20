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
      <button onClick={props.onClickingEdit}>Update Item</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;