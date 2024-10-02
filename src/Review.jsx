export default function Review({ data, posterData }) {
  const cleanVotes = data.imdbVotes.replace(/[^0-9]/g, "");
  const imdbVotes = Number(cleanVotes);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const size = "w500";
  return (
    <div>
      <div className="bg-gray-900 pt-16 pb-16 md:h-full md:pb-96">
        <div className="md:w-1/2 mx-auto text-gray-400 px-4">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl text-white mb-2">
                {data.Title}
              </h1>
              <p>
                {data.Year} &bull; {data.Rated} &bull; {data.Runtime}
              </p>
            </div>
            <div className="flex flex-row md:gap-8">
              <div>
                <p className="font-bold hidden md:block">IMDb RATING</p>
                <p className="font-bold md:hidden block text-center">IMDb</p>
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
                <p className="font-bold hidden md:block">
                  ROTTEN TOMATOES RATING
                </p>
                <p className="font-bold md:hidden block text-center">
                  ROTTEN TOMATOES
                </p>
                <p className="text-center">
                  🍅
                  {data?.Ratings?.[1]?.Value ?? "N/A"}
                </p>
              </div>
            </div>
          </div>
          {/* header for card */}
          <div className="flex justify-center m-8">
            <img
              className="h-96"
              src={`${baseUrl}${size}${posterData.results[0].poster_path}`}
            ></img>
          </div>
          <div className="flex flex-row gap-2 my-2">
            {data.Genre.split(",").map((word) => (
              <button
                onClick={() => {
                  window.open(
                    `https://www.google.com/search?q=${word}+movie+definition`,
                    "_blank"
                  );
                }}
                target="_blank"
                className="border border-1 rounded-xl px-2 font-medium text-white hover:bg-gray-600"
              >
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
            <a
              href={`https://www.google.com/search?q=${data.Director}`}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {data.Director}
            </a>
          </p>
          <div className="border-b my-4 border-gray-500"></div>
          <p>
            <strong className="text-white">Writer </strong>
          </p>
          <p className="my-4">
            <a
              href={`https://www.google.com/search?q=${data.Writer}`}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {data.Writer}
            </a>
          </p>
          <div className="border-b my-4 border-gray-500"></div>
          <p className="my-4">
            <strong className="text-white ">Stars </strong>
          </p>
          <div>
            {data.Actors.split(",").map((actor) => (
              <a
                href={`https://www.google.com/search?q=${actor}`}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
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
