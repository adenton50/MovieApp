export default function MoviePage({ data }) {
  // console.log(data.length);
  // console.log(typeof data);
  if (data.length === 1) {
    return <div>Hello</div>;
  } else if (data.length === undefined) {
    const cleanVotes = data.imdbVotes.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    const imdbVotes = Number(cleanVotes);
    return (
      <div className="bg-gray-900">
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
                <p className="text-center">🍅{data.Ratings[1].Value}</p>
              </div>
            </div>
          </div>
          {/* header for card */}
          <div className="flex flex-row gap-2">
            {data.Genre.split(",").map((word) => (
              <button className="border border-1 rounded-xl px-2 font-medium text-white hover:bg-gray-600">
                {word}
              </button>
            ))}
          </div>
          <p className="font-medium text-white">{data.Plot}</p>
          <p>
            <strong className="text-white">Director </strong>
          </p>
          <p>
            <a href="" className="text-blue-500 hover:underline">
              {data.Director}
            </a>
          </p>
          <p>
            <strong className="text-white">Writer </strong>
          </p>
          <p>
            <a href="google.com" className="text-blue-500 hover:underline">
              {data.Writer}
            </a>
          </p>
          <p>
            <strong className="text-white">Stars </strong>
          </p>
          <div>
            {data.Actors.split(",").map((actor) => (
              <a href="" className="text-blue-500 hover:underline">
                {actor + ","}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
