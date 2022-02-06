import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import QoD from "../QoD";
import Slide from "../Slide";

const Home: React.FC<any> = () => {

  const qodCategory = useTypedSelector((state) => state.qodCategory);
  const { fetchQoDCategory } = useActions();

  useEffect(() => {
    fetchQoDCategory()
  }, [fetchQoDCategory]);

  return (
    <div>
      <QoD />
      <Slide categories={qodCategory}/>
    </div>
  )
};

export default Home;