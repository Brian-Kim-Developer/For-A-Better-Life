import React from "react";
import { Field, reduxForm } from 'redux-form';
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { renderField } from "../../Form";
import quoteValidation from '../validate';

import "./QSearchStep2.scss";

interface QSearchStep2Props {
  previousPage: () => void;
  handleSubmit: () => void;
}

const QSearchStep2: React.FC<QSearchStep2Props> = (props) => {
  
  const { previousPage, handleSubmit } = props;
  const theme = useTypedSelector((state) => state.theme);

  return (
    <div>
      <h2>What is the author you're interested in?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Field 
            name="author"
            type="text"
            component={renderField}
            label="Author"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" onClick={previousPage} id="prev" className={theme}>Previous</button>
          <button type="submit" id="next" className={theme}>Next</button>
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
})(QSearchStep2);