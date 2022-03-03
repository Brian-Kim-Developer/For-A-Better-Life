import React from 'react';
import ReactLoading from 'react-loading';

import "./Loader.scss";

interface LoaderProps {
  width: string;
  height: string;
}

const Loader: React.FC<LoaderProps> = (props) => {

  const { width, height } = props;

  return (
    <div className="loading-container">
      <ReactLoading
        type="spin"
        color="#000"
        width={width}
        height={height} />
    </div>
  );
}

export default Loader;
