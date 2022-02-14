import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/use-typed-selector";

import QSearchStart from "./QSearchStart";
import QSearchStep1 from "./QSearchStep1";
import QSearchStep2 from "./QSearchStep2";
import QSearchStep3 from "./QSearchStep3";
import QSearchResult from "./QSearchResult";

import "./QSearch.scss";

const QSearch: React.FC<any> = () => {

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

  return (
    <div className={`search-container ${theme}`}>
      <h5 className={`search-header ${theme}`}>The perfect quotes for you!</h5>
      <div className="search-body">
        { page === 0 && <QSearchStart handleSubmit={nextPage}/> }
        { page === 1 && <QSearchStep1 previousPage={previousPage} handleSubmit={nextPage} /> }
        { page === 2 && <QSearchStep2 previousPage={previousPage} handleSubmit={nextPage} /> }
        { page === 3 && <QSearchStep3 previousPage={previousPage} handleSubmit={nextPage} /> }
        { page === 4 && <QSearchResult resetPage={resetPage} /> }
      </div>
    </div>
  )
};

export default QSearch;