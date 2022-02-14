import React from "react";

import "./QSearchResult.scss";

interface QSearchResultProps {
  resetPage: () => void;
}

const QSearchResult: React.FC<QSearchResultProps> = (props) => {
  
  const { resetPage } = props;
  
  return (
    <div>
      <button onClick={resetPage} className="reset">Result</button>
    </div>
  )
};

export default QSearchResult;