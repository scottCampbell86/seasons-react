import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

const App = () => {
  return (
    <>
      <div>Hi, i'm App</div>
      <SeasonDisplay />
    </>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))