import React from "react";

const statistics = [
  { label: "Accidents per Year", value: "6 million" },
  { label: "Fatalities per Year", value: "1.35 million" },
  { label: "Injuries per Year", value: "50 million" },
  { label: "Cost of Road Crashes per Year", value: "$518 billion" },
];

const Statistics: React.FC = () => {
  return (
    <section id="statistics" className="container mx-auto mb-6 p-8 bg-gray-200">
      <h2 className="text-2xl font-bold mb-4">Road Safety Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md text-center"
          >
            <h3 className="text-xl font-semibold">{stat.label}</h3>
            <p className="text-lg">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
