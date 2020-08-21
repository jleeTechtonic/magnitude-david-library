import React from 'react';
import { render } from 'react-dom';
import './assets/index.scss';

const Application = () => {
  return <h1>Hello!</h1>;
};

render(<Application />, document.getElementById('root'));
