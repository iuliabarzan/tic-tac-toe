import React from 'react';
import ReactDOM from 'react-dom';
import Players from './components/Players';
import './styles.css';

function App() {
  return (
    <Players />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
