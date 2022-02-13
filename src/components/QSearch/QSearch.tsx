import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/use-typed-selector";

import QSearchStep1 from "./QSearchStep1";
import QSearchStep2 from "./QSearchStep2";
import QSearchStep3 from "./QSearchStep3";

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

  return (
    <React.Fragment>
      <h5 className={`search-header ${theme}`}>The perfect quotes for you!</h5>
      { page === 0 && <div>Start!</div> }
      { page === 1 && <QSearchStep1 /> }
      { page === 2 && <QSearchStep2 /> }
      { page === 3 && <QSearchStep3 /> }
      { page === 4 && <div>Final!</div> }
      <button onClick={() => previousPage()}>Back</button>
      <button onClick={() => nextPage()}>Next</button>
    </React.Fragment>
  )
};

export default QSearch;