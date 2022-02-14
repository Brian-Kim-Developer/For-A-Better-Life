import React from 'react';

interface FieldProps {
  input: any,
  label: string,
  type: string,
  meta: {
    touched: any,
    error: any
  }
}

const renderField: React.FC<FieldProps> = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div className="form-floating">
      <input {...input} id={label} className="form-control" placeholder={label} type={type} />
      <label htmlFor={label}>{label}</label>
    </div>
    {touched && error && <span>{error}</span>}
  </div>
);

export default renderField;
