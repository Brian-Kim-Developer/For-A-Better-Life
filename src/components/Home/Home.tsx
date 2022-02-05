import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDOQ } from "../../state/action-creators";

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

const Home: React.FC<HomeProps> = ({doq, fetchDOQ}) => {
  useEffect(() => {
    fetchDOQ();
  }, []);

  return (
    <div>
      {doq.author}
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return { doq: state.doq };
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchDOQ: () => dispatch(fetchDOQ())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);