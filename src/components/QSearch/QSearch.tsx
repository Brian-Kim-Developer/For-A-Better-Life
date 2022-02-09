import React from "react";
import { useTypedSelector } from "../../hooks/use-typed-selector";

import "./QSearch.scss";

const QSearch: React.FC<any> = () => {

  const theme = useTypedSelector((state) => state.theme);

  return (
    <React.Fragment>
      <h5 className={`search-header ${theme}`}>The perfect quotes for you!</h5>
      <div></div>
    </React.Fragment>
  )
};

export default QSearch;