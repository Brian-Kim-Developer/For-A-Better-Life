import { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";

interface DOQ {
  author: string,
  background: string,
  category: string,
  quote: string,
  tags: Array<string>,
  title: string
}

interface HomeProps {
  doq: DOQ
  fetchDOQ: () => void;
}

const Home: React.FC<HomeProps> = () => {
  const doq = useTypedSelector((state) => state.doq);
  const { fetchDOQ } = useActions();

  useEffect(() => {
    fetchDOQ();
  }, [fetchDOQ]);

  return (
    <div>
      {doq.author}
    </div>
  )
};

export default Home;