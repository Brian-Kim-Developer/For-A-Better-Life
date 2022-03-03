import React from "react";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import NoResult from "./NoResult";
import Loader from "../../Loader";

import "./QSearchResult.scss";

interface QSearchResultProps {
  resetPage: () => void;
}

const QSearchResult: React.FC<QSearchResultProps> = (props) => {
  
  const { resetPage } = props;
  const theme = useTypedSelector((state) => state.theme);
  const userQuotes = useTypedSelector((state) => state.userQuotes);

  return (
    <div className="result-containter">
      {userQuotes.loading && <Loader width="40px" height="40px" />}
      {!userQuotes.loading && userQuotes.data.length === 0 && <NoResult />}
      {!userQuotes.loading && userQuotes.data.length > 0 && userQuotes.data.map(quote => {
        return (
            <div key={quote.id} className="d-flex flex-row mb-3">
              <FontAwesomeIcon icon={faMessage} size="10x" className="icon-message"/>
              <div className="d-flex flex-column">
                <div>{quote.author ? quote.author : 'Unknown'}</div>
                <div className="quote">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  {` ${quote.quote} `}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>
              </div>
            </div>
        )
      })}
      <button type="button" onClick={resetPage} id="reset" className={theme}>Restart</button>
    </div>
  )
};

export default QSearchResult;