import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderField } from "../../Form";
import quoteValidation from '../validate';

import "./QSearchStep1.scss";

interface QSearchStep1Props {
  previousPage: () => void;
  handleSubmit: () => void;
}

const QSearchStep1: React.FC<QSearchStep1Props> = (props) => {
  
  const { previousPage, handleSubmit } = props;

  return (
    <div>
      <h2>What is the category you're interested in?</h2>
      <form onSubmit={handleSubmit}>
        <button onClick={previousPage} className="back">Back</button>
        <Field 
          name="category"
          type="text"
          component={renderField}
          label="Category"
        />
        <button type="submit" className="next">Next</button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'quoteSearch',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  quoteValidation
})(QSearchStep1);