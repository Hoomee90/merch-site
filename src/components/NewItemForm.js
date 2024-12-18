import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  const displayBlock = {
    display: "block",
    marginTop: "10px"
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Merchandise Name'
          style={displayBlock} />
        <textarea
          name='description'
          placeholder='Description'
          style={displayBlock} />
        <input
          name='quantity'
          type='number'
          placeholder='Number in stock'
          style={displayBlock} />
        <button type='submit' style={displayBlock}>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;