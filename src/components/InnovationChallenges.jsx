const InnovationChallenges = () => {
  return (
    <section className="py-20">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Community Challenges
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Innovation Challenges
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Participate in exciting challenges, solve real-world problems,
            and showcase your creativity to the IdeaVault community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold">
              Smart Waste Management
            </h3>

            <p className="text-gray-500 mt-2">
              Create innovative solutions to reduce urban waste and improve recycling.
            </p>

            <div className="flex justify-between mt-6 text-sm">
              <span>👥 124 Participants</span>
              <span>⏳ 7 Days Left</span>
            </div>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold">
              Future of Education
            </h3>

            <p className="text-gray-500 mt-2">
              Design solutions that make learning more accessible and effective.
            </p>

            <div className="flex justify-between mt-6 text-sm">
              <span>👥 98 Participants</span>
              <span>⏳ 12 Days Left</span>
            </div>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold">
              Sustainable Agriculture
            </h3>

            <p className="text-gray-500 mt-2">
              Help farmers improve productivity through innovative technology.
            </p>

            <div className="flex justify-between mt-6 text-sm">
              <span>👥 76 Participants</span>
              <span>⏳ 5 Days Left</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationChallenges;