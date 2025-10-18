"use client"; // première ligne du fichier

import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Cliquez-moi : {count}
    </button>
  );
}
