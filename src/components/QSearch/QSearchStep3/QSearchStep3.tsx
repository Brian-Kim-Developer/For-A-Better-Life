import React from "react";
import { Field, reduxForm } from 'redux-form';
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { renderField } from "../../Form";
import quoteValidation from '../validate';

import "./QSearchStep3.scss";

interface QSearchStep3Props {
  previousPage: () => void;
  handleSubmit: () => void;
}

const QSearchStep3: React.FC<QSearchStep3Props> = (props) => {
  
  const { previousPage, handleSubmit } = props;
  const theme = useTypedSelector((state) => state.theme);

  return (
    <div>
      <h2>What is the keyword you're interested in?</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="query"
          type="text"
          component={renderField}
          label="Keyword"
        />
        <div className="d-flex justify-content-between">
          <button type="button" onClick={previousPage} id="prev" className={theme}>Previous</button>
          <button type="submit" id="next" className={theme}>Submit</button>
        </div>
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