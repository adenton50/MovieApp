export default function Header({ setData, setInput, input }) {
  const fetchData = async (e) => {
    e.preventDefault();
    const API_KEY = "259668b2";
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${input}&apikey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log("Error", error);
    }
    setInput("");
  };
  return (
    <div>
      <div className="shadow flex-row flex p-8 bg-black">
        <div className="bg-yellow-500 text-black p-4 rounded-lg">
          <h1 className="text-4xl font-bold">AdaMDd</h1>
        </div>
        <div className="flex-1"></div>
        <form onSubmit={fetchData} className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-96">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-md text-gray-900 border-4 border-yellow-500 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              placeholder="Search for a movie..."
              required
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-3 bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 tracking-wider"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
