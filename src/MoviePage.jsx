import Review from "./Review";

export default function MoviePage({ data }) {
  if (data.length === 1) {
    return (
      <div className="bg-gray-900 h-screen flex justify-center px-8">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-fit mt-24">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Welcome to AdaMDd!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Utilize the search bar to explore movies and TV shows before viewing
            them. My app provides detailed information, including plot
            summaries, reviews, and cast details for each title.
          </p>
        </div>
      </div>
    );
  } else {
    return <Review data={data} />;
  }
}
