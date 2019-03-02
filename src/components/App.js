import React from 'react';
import { hot } from 'react-hot-loader';

import CounterContainer from '../containers/counter';


const App = () => (
  <div>
    <CounterContainer />
  </div>
);

export default hot(module)(App);
