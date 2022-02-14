import React from "react";

import "./QSearchStart.scss";

interface QSearchStartProps {
  handleSubmit: () => void;
}

const QSearchStart: React.FC<QSearchStartProps> = (props) => {
  
  const { handleSubmit } = props;

  return (
    <div>
      <button onClick={handleSubmit} className="start-button">Start</button>
    </div>
  )
};

export default QSearchStart;