import React from "react";
import { Field, reduxForm } from 'redux-form';
import { renderField } from "../../Form";
import quoteValidation from '../validate';

import "./QSearchStep3.scss";

interface QSearchStep3Props {
  previousPage: () => void;
  handleSubmit: () => void;
}

const QSearchStep3: React.FC<QSearchStep3Props> = (props) => {
  
  const { previousPage, handleSubmit } = props;

  return (
    <div>
      <h2>What is the keyword you're interested in?</h2>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={previousPage} className="back">Back</button>
        <Field
          name="query"
          type="text"
          component={renderField}
          label="Keyword"
        />
        <button type="submit" className="next">Submit</button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'quoteSearch',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  quoteValidation
})(QSearchStep3);