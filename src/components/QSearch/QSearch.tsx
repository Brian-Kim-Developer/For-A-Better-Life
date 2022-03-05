import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useActions } from "../../hooks/use-actions";
import { QuoteSearch } from "../../state/action-creators";

import QSearchStart from "./QSearchStart";
import QSearchStep1 from "./QSearchStep1";
import QSearchStep2 from "./QSearchStep2";
import QSearchStep3 from "./QSearchStep3";
import QSearchResult from "./QSearchResult";

import "./QSearch.scss";

interface QSearchProps {
  onSubmit: (formValues: QuoteSearch) => void;
}

const QSearch: React.FC<QSearchProps> = (props) => {

  const { onSubmit } = props;
  const { userQuotesLoadingToggle } = useActions();
  const theme = useTypedSelector((state) => state.theme);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  }

  const previousPage = () => {
    setPage(page - 1);
  }

  const resetPage = () => {
    setPage(0);
  }

  const getResult = (formValues: QuoteSearch) => {
    nextPage();
    userQuotesLoadingToggle(true);
    onSubmit(formValues);
  }

  return (
    <div className={`search-container ${theme}`}>
      <h5 className={`search-header ${theme}`}>The perfect quotes for you!</h5>
      <div className="search-body">
        { page === 0 && <QSearchStart onSubmit={nextPage}/> }
        { page === 1 && <QSearchStep1 previousPage={previousPage} onSubmit={nextPage} /> }
        { page === 2 && <QSearchStep2 previousPage={previousPage} onSubmit={nextPage} /> }
        { page === 3 && <QSearchStep3 previousPage={previousPage} onSubmit={getResult} /> }
        { page === 4 && <QSearchResult resetPage={resetPage} /> }
      </div>
    </div>
  )
};

QSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default QSearch;