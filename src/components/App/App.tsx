import { Router, Route } from 'react-router-dom'; 
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';

import Header from '../Header/Header';
import Home from '../Home';

import "./App.scss";

const App = () => {

  const theme = useTypedSelector((state) => state.theme);

  useEffect(()  => {
    document.body.classList.add(theme, 'm-0');
    return () => {
        document.body.classList.remove(theme, 'm-0');
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