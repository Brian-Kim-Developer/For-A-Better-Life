interface QuoteValidation {
  category: string,
  author: string,
  keyword: string
}

const initialValidation: QuoteValidation = {
  category: '',
  author: '',
  keyword: ''
}
const quoteValidation = (values: QuoteValidation) => {
  const errors: QuoteValidation = initialValidation;
  if (!values.category) {
    errors.category = 'Required';
  }
  return errors;
};

export default quoteValidation;
