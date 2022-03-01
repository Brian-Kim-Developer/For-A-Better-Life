import React from "react";

import "./QSearchStart.scss";

interface QSearchStartProps {
  onSubmit: () => void;
}

const QSearchStart: React.FC<QSearchStartProps> = (props) => {
  
  const { onSubmit } = props;

  return (
    <div>
      <button onClick={onSubmit} className="start-button">Start</button>
    </div>
  )
};

export default QSearchStart;