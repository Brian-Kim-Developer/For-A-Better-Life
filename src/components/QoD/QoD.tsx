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
      {qod.author}
    </div>
  )
};

export default QoD;