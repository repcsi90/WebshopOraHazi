import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TermekKosarban from './components/TermékKosárba.js';

function App() {
  return (
    <div>
    <h1>Webshop</h1>
    <TermekKosarban />
  </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
