import React from 'react';
import KosarTermek from './Kosártermék.js';

const Kosaram = ({ kosar, eltavolitKosarbol }) => (
  <div>
    <h2>Kosaram</h2>
    {kosar.map(termek => (
      <KosarTermek key={termek.id} termek={termek} eltavolitKosarbol={eltavolitKosarbol} />
    ))}
    <p>Összesen: {kosar.reduce((osszeg, termek) => osszeg + termek.ar, 0)} Ft</p>
  </div>
);

export default Kosaram;
