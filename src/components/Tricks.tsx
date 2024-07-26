import React from "react";

const tricks = [
  "Use defensive driving techniques.",
  "Regularly maintain your vehicle.",
  "Plan your routes in advance.",
  "Avoid driving in bad weather conditions.",
  "Take breaks during long drives.",
];

const Tricks: React.FC = () => {
  return (
    <section id="tricks" className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Driving Tricks</h2>
        <ul className="list-disc pl-5">
          {tricks.map((trick, index) => (
            <li key={index} className="mb-2">
              {trick}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tricks;
