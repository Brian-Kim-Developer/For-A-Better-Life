import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import QoD from "../QoD";
import QoDCarousel from "../QoDCarousel";

const Home: React.FC<any> = () => {

  const qodList = useTypedSelector((state) => state.qodList);
  const { fetchQoDList } = useActions();

  useEffect(() => {
    fetchQoDList()
  }, [fetchQoDList]);

  return (
    <div>
      <QoD />
      <QoDCarousel qodList={qodList}/>
    </div>
  )
};

export default Home;