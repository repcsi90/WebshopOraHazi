import React from 'react';

const Termék = ({ termek, hozzaadKosarhoz }) => (
  <div>
    <h2>{termek.nev}</h2>
    <p>Ár: {termek.ar} Ft</p>
    <button onClick={() => hozzaadKosarhoz(termek)}>Kosárba</button>
  </div>
);

export default Termék;
