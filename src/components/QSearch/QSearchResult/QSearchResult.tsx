import React from "react";
import { useTypedSelector } from "../../../hooks/use-typed-selector";

import "./QSearchResult.scss";

interface QSearchResultProps {
  resetPage: () => void;
}

const QSearchResult: React.FC<QSearchResultProps> = (props) => {
  
  const { resetPage } = props;
  const userQuotes = useTypedSelector((state) => state.userQuotes);
  
  return (
    <div>
      {userQuotes.map(quote => {
        return (
          <div key={quote.id}>
            <div>{quote.author}</div>
            <div>{quote.quote}</div>
          </div>
        )
      })}
      <button type="button" onClick={resetPage} className="reset">Result</button>
    </div>
  )
};

export default QSearchResult;