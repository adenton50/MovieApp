import { useState } from "react";
import Header from "./Header";
import MoviePage from "./MoviePage";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([null]);
  return (
    <div className="App">
      <Header setInput={setInput} setData={setData} input={input} />
      {/* <MoviePage data={data} /> */}
    </div>
  );
}

export default App;
