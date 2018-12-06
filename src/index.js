import React from 'react';
import ReactDOM from 'react-dom';
import Players from './components/Players';
import './styles.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <AppRouter />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
