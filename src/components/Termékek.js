import React from 'react';
import Termek from './Termék.js';

const Termekek = ({ termekek, hozzaadKosarhoz }) => (
  <div>
    {termekek.map(termek => (
      <Termek key={termek.id} termek={termek} hozzaadKosarhoz={hozzaadKosarhoz} />
    ))}
  </div>
);

export default Termekek;
