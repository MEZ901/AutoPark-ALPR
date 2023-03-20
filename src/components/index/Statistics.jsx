import StatisticCard from "./StatisticCard";

const Statistics = () => {
  const stats = [
    {
      num: "1K+",
      title: "satisfied users"
    },
    {
      num: "500+",
      title: "capacity of vehicles"
    },
    {
      num: "3k+",
      title: "vehicles have been tracked"
    }
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <StatisticCard stat={stat} />
              </div>
            ))}
          </dl>
      </div>
    </section>
  )
}

export default Statistics;