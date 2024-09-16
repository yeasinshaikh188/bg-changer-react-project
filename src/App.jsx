import { useState } from "react";
import BgChanger from "./Component/BgChanger";

function App() {
  const [color, setColor] = useState('bg-green-500');
  return (
    <div className={
      `h-screen ${color} `
    }>
   <BgChanger setColor={setColor}></BgChanger>
    </div>
  )
}



export default App;




// import { useState } from "react";
// import BgChanger from "./Component/BgChanger";

// function App() {
//   const [color, setColor] = useState("green");
//   return (
//     <div className={
//       `h-screen ${color == "red" ? "bg-red-400" : color == "green" ? "bg-green-500" : ""} `
//     }>
//    <BgChanger setColor={setColor}></BgChanger>
//     </div>
//   )
// }



// export default App;