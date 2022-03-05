import React from 'react';
import ReactLoading from 'react-loading';
import { useTypedSelector } from '../../hooks/use-typed-selector';

import "./Loader.scss";

interface LoaderProps {
  width: string;
  height: string;
}

const Loader: React.FC<LoaderProps> = (props) => {

  const { width, height } = props;
  const theme = useTypedSelector((state) => state.theme);

  return (
    <div className="loading-container">
      <ReactLoading
        type="spin"
        color={theme === 'light' ? "#000" : "#FFF"}
        width={width}
        height={height} />
    </div>
  );
}

export default Loader;
