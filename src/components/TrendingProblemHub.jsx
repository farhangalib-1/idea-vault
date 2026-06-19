const TrendingProblemHub = () => {
  return (
    <section className="py-20 bg-base-200 rounded-3xl">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Community Insights
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Trending Problem Hub
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore the most discussed challenges and discover innovative ideas
            created by the community to solve them.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              🎓 Students struggle to find quality internships
            </h3>

            <p className="text-gray-500 mt-2">
              56 ideas submitted • 230 discussions
            </p>

            <button className="btn btn-primary mt-4">
              Explore Solutions
            </button>
          </div>

          <div className="border bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              ♻️ Increasing plastic waste in cities
            </h3>

            <p className="text-gray-500 mt-2">
              43 ideas submitted • 180 discussions
            </p>

            <button className="btn btn-primary mt-4">
              Explore Solutions
            </button>
          </div>

          <div className="border bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              🚑 Limited healthcare access in rural areas
            </h3>

            <p className="text-gray-500 mt-2">
              39 ideas submitted • 145 discussions
            </p>

            <button className="btn btn-primary mt-4">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProblemHub;