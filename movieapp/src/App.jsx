import { useState } from "react";
import Header from "./Header";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Header setInput={setInput} setData={setData} input={input} />
    </div>
  );
}

export default App;
