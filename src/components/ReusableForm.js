import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const displayBlock = {
    display: "block",
    marginTop: "10px"
  }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit' style={displayBlock}>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;