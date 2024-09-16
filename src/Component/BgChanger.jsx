import { useState } from "react";

function BgChanger({setColor}) {
  

  return (
    <div className="m-auto">
      <button className="text-xl font-bold px-5 py-3 rounded m-3 bg-red-600 text-white" onClick={() => setColor("bg-red-600")}>Red</button>
      <button className="text-xl font-bold px-5 py-3 rounded m-3 bg-yellow-600 text-white" onClick={() => setColor("bg-yellow-600 ")}>yellow</button>
      <button className="text-xl font-bold px-5 py-3 rounded m-3 bg-black text-white" onClick={() => setColor("bg-black")}>black</button>
      <button className="text-xl font-bold px-5 py-3 rounded m-3 bg-white " onClick={() => setColor("bg-white")}>white</button>
    </div>
  );
}

export default BgChanger;
