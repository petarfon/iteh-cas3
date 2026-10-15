"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  let broj = 0;
  return (
    <>
      <p className="bg-blue-500 text-white">
        Ovo je pocetna stanica page.tsx
      </p>
      <p>Broj je {count}</p>
      <button onClick={()=>setCount(count + 1)}>Povecaj</button>
    </>
    
  );
}


// function (){
//   sdlkasdkladlas

//   return povratnaVrednost;
// }

// ()=>{
//   sdlkasdkladlas

//   return povratnaVrednost;
// }

// ()=> povratnaVrednost

