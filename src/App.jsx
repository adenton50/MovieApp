import { useState } from "react";
import Header from "./Header";
import MoviePage from "./MoviePage";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([null]);
  const [posterData, setPosterData] = useState([null]);
  return (
    <div className="App">
      <Header
        setInput={setInput}
        setData={setData}
        input={input}
        setPosterData={setPosterData}
      />
      <MoviePage data={data} posterData={posterData} />
    </div>
  );
}

export default App;
