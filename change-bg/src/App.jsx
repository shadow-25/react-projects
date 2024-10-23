import { useState } from "react";
function App() {
  let [color, setColor] = useState("olive");
  console.log(color);
  

  return (
    <>
    <div className="w-full, h-screen" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl" style={{backgroundColor:color}}>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500" onClick={() => setColor("red")}>RED</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500" onClick={() => setColor("green")}>GREEN</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg  bg-blue-500" onClick={()=>setColor("blue")}>BLUE</button>
                <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg  bg-white" onClick={()=>setColor("white")}>WHITE</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg  bg-black" onClick={()=>setColor("black")}>BLACK</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg  bg-yellow-500" onClick={()=>setColor("yellow")}>YELLOW</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg  bg-purple-500" onClick={()=>setColor("purple")}>PURPLE</button>
                <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg laven" onClick={()=>setColor("lavender")}>LAVENDER</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-400" onClick={()=>setColor("pink")}>PINK</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-500" onClick={()=>setColor("gray")}>GRAY</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg olev" onClick={()=>setColor("olive")}>OLIVE</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;