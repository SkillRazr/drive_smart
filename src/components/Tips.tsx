import React from "react";

const tips = [
  "Always wear your seatbelt.",
  "Follow the speed limit.",
  "Do not use your phone while driving.",
  "Be aware of your surroundings.",
  "Keep a safe distance from the vehicle in front of you.",
];

const Tips: React.FC = () => {
  return (
    <section id="tips" className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Road Safety Tips</h2>
      <ul className="list-disc pl-5">
        {tips.map((tip, index) => (
          <li key={index} className="mb-2">
            {tip}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tips;
