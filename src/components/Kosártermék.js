import React from 'react';

const Kosártermék = ({ termek, eltavolitKosarbol }) => (
  <div>
    <h2>{termek.nev}</h2>
    <p>Ár: {termek.ar} Ft</p>
    <button onClick={() => eltavolitKosarbol(termek.id)}>Eltávolítás</button>
  </div>
);

export default Kosártermék;
