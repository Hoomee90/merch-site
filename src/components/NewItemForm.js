import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value.length <= 0 ? 0 : parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  return (
    <ReusableForm
      formSubmissionHandler={handleNewItemFormSubmission}
      buttonText="Submit"
    />
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;