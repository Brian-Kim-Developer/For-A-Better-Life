import { Router, Route } from 'react-router-dom'; 
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';

import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => {

  useEffect(()  => {
    document.body.classList.add('m-0');

    return () => {
        document.body.classList.remove('m-0');
    };
  });

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Header />
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;