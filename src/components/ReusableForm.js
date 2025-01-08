import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const displayBlock = {
    display: "block",
    marginTop: "12px",
    marginBottom: "6px"
  }
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input
        defaultValue={props?.item?.name ? props.item.name : ""}
        type='text'
        name='name'
        placeholder='Merchandise Name'
        style={displayBlock} />
      <textarea
        defaultValue={props?.item?.description ?? ""}
        name='description'
        placeholder='Description'
        style={displayBlock} />
      <input
        required
        min="0"
        defaultValue={props?.item?.quantity ?? ""}
        name='quantity'
        type='number'
        placeholder='Number in stock'
        style={displayBlock} />
      <button type='submit' style={displayBlock}>{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;