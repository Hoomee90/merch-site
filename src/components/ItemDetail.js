import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;
  const disabled = item.quantity <= 0
  const styles = {
    marginRight: "1em"
  }

  return (
    <React.Fragment>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <h4>In stock: {item.quantity}</h4>
      <button onClick={() => props.onClickingChangeStock(false)} disabled={disabled} style={styles}>Buy</button>
      <button onClick={() => props.onClickingChangeStock(true)} style={styles}>Restock</button>
      <hr />
      <button onClick={props.onClickingEdit} style={styles}>Update Item</button>
      <button onClick={() => props.onClickingDelete(item.id)} style={styles}>Delete Item</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingChangeStock: PropTypes.func
};

export default ItemDetail;