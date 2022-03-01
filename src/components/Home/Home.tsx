import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import QoD from "../QoD";
import QoDCarousel from "../QoDCarousel";
import QSearch from "../QSearch";

const Home: React.FC<any> = () => {

  const qodList = useTypedSelector((state) => state.qodList);

  const { fetchAllQoD, fetchUserQuotes } = useActions();

  useEffect(() => {
    fetchAllQoD()
  }, [fetchAllQoD]);

  return (
    <div>
      <QoD />
      <QoDCarousel qodList={qodList}/>
			<QSearch onSubmit={fetchUserQuotes} />
    </div>
  )
};

export default Home;