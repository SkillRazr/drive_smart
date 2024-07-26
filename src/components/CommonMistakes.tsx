import React from "react";

const mistakes = [
  "Not wearing a seatbelt",
  "Speeding",
  "Distracted driving",
  "Driving under the influence",
  "Ignoring traffic signs",
];

const CommonMistakes: React.FC = () => {
  return (
    <section id="common-mistakes" className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Common Mistakes on the Road</h2>
      <ul className="list-disc pl-5">
        {mistakes.map((mistake, index) => (
          <li key={index} className="mb-2">
            {mistake}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommonMistakes;
