import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderField } from "../../Form";
import quoteValidation from '../validate';

import "./QSearchStep2.scss";

interface QSearchStep2Props {
  previousPage: () => void;
  handleSubmit: () => void;
}

const QSearchStep2: React.FC<QSearchStep2Props> = (props) => {
  
  const { previousPage, handleSubmit } = props;

  return (
    <div>
      <h2>What is the author you're interested in?</h2>
      <form onSubmit={handleSubmit}>
        <button onClick={previousPage} className="back">Back</button>
        <Field 
          name="author"
          type="text"
          component={renderField}
          label="Author"
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
})(QSearchStep2);