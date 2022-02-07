import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import QoD from "../QoD";
import Slide from "../Slide";

const Home: React.FC<any> = () => {

  const qodList = useTypedSelector((state) => state.qodList);
  const { fetchQoDList } = useActions();

  useEffect(() => {
    fetchQoDList()
  }, [fetchQoDList]);

  return (
    <div>
      <QoD />
      <Slide qodList={qodList}/>
    </div>
  )
};

export default Home;