export default function Review({ data }) {
  const cleanVotes = data.imdbVotes.replace(/[^0-9]/g, "");
  const imdbVotes = Number(cleanVotes);
  return (
    <div>
      <div className="bg-gray-900 h-screen pt-16">
        <div className="w-1/2 mx-auto text-gray-400">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-4xl text-white mb-2">{data.Title}</h1>
              <p>
                {data.Year} &bull; {data.Rated} &bull; {data.Runtime}
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <div>
                <p className="font-bold">IMDb RATING</p>
                <p className="text-center">
                  ⭐
                  <span className="text-white text-xl font-bold">
                    {data.imdbRating}
                  </span>
                  /10
                </p>
                <p className="text-center">
                  {imdbVotes > 1000
                    ? `${(imdbVotes / 1000).toFixed(1)}K`
                    : data.imdbVotes}
                </p>
              </div>
              <div>
                <p className="font-bold">ROTTEN TOMATOES RATING</p>
                <p className="text-center">
                  🍅
                  {data?.Ratings?.[1]?.Value ?? "N/A"}
                </p>
              </div>
            </div>
          </div>
          {/* header for card */}
          <div className="flex flex-row gap-2 my-2">
            {data.Genre.split(",").map((word) => (
              <button className="border border-1 rounded-xl px-2 font-medium text-white hover:bg-gray-600">
                {word}
              </button>
            ))}
          </div>

          <p className="font-medium text-white ">{data.Plot}</p>
          <div className="border-b my-4 border-gray-500"></div>
          <p>
            <strong className="text-white">Director </strong>
          </p>
          <p>
            <a href="" className="text-blue-500 hover:underline">
              {data.Director}
            </a>
          </p>
          <div className="border-b my-4 border-gray-500"></div>
          <p>
            <strong className="text-white">Writer </strong>
          </p>
          <p className="my-4">
            <a href="google.com" className="text-blue-500 hover:underline">
              {data.Writer}
            </a>
          </p>
          <div className="border-b my-4 border-gray-500"></div>
          <p className="my-4">
            <strong className="text-white ">Stars </strong>
          </p>
          <div>
            {data.Actors.split(",").map((actor) => (
              <a href="" className="text-blue-500 hover:underline">
                {actor + ","}
              </a>
            ))}
            <div className="border-b my-4 border-gray-500 my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
