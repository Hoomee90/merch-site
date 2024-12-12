import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props) {

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.location.value,
      quantity: parseInt(event.target.issue.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Merchandise Name' />
        <textarea
          name='description'
          placeholder='Description' />
        <input
          name='quantity'
          type='number'
          placeholder='Number in stock' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;