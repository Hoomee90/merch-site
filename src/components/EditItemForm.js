import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({ name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: item.id });
  }

  return (
    <ReusableForm
      formSubmissionHandler={handleEditItemFormSubmission}
      buttonText="Update Item"
      item={item} />
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;