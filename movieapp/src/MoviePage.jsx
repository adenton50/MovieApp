export default function MoviePage({ data }) {
  if (!data) {
    return <div></div>;
  } else if (data) {
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
          <p>
            {data.Genre.split(",").map((item) => {
              <button>{item}</button>;
            })}
          </p>
          <p>{data.Plot}</p>
          <p>
            <strong>Director </strong>
            {data.Director}
          </p>
          <p>
            <strong>Writer </strong>
            {data.Writer}
          </p>
          <p>
            <strong>Stars </strong>
            {data.Actors}
          </p>
        </div>
      </div>
    );
  }
}
