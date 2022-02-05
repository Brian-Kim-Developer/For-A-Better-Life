import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";

import "./QoD.scss";

const QoD: React.FC<any> = () => {
  const qod = useTypedSelector((state) => state.qod);
  const { fetchQoD } = useActions();

  useEffect(() => {
    fetchQoD();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchQoD]);

  return (
    <div className="qod-container" style={{background: `url(${qod.background})`}}>
      <div className="qod-text-container">
        <h4 className="fadein-top align-self-start mb-5">{qod.title}</h4>
        <h1 className="fadein-bottom">"{qod.quote}"</h1>
        <h5 className="fadein-bottom align-self-end">- {qod.author}</h5>
      </div>
    </div>
  )
};

export default QoD;