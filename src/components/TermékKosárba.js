import React, { useState } from 'react';
import Termekek from './Termékek.js';
import Kosaram from './Kosaram.js';

const TermekKosarban = () => {
  const [termekek] = useState([
    { id: 1, nev: 'Termék 1', ar: 1000 },
    { id: 2, nev: 'Termék 2', ar: 2000 },
    { id: 3, nev: 'Termék 3', ar: 3000 },
    { id: 4, nev: 'Termék 4', ar: 4000 },
    { id: 5, nev: 'Termék 5', ar: 5000 },
  ]);

  const [kosar, setKosar] = useState([]);

  const hozzaadKosarhoz = (termek) => {
    setKosar([...kosar, termek]);
  };

  const eltavolitKosarbol = (id) => {
    setKosar(kosar.filter(termek => termek.id !== id));
  };

  return (
    <div>
      <Termekek termekek={termekek} hozzaadKosarhoz={hozzaadKosarhoz} />
      <Kosaram kosar={kosar} eltavolitKosarbol={eltavolitKosarbol} />
    </div>
  );
};

export default TermekKosarban;
