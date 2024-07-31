import Review from "./Review";

export default function MoviePage({ data }) {
  if (data.length === 1) {
    return (
      <div className="bg-gray-900 h-screen flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-1/4 mt-24">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Welcome to AdaMDd!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Use the search bar to search for movies or TV shows before you watch
            them. We include the plot, the reviews and actors starring in them.
          </p>
        </div>
      </div>
    );
  } else {
    return <Review data={data} />;
  }
}
