import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Driving and Road Safety Awareness</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/quiz" className="text-blue-500">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="/videos" className="text-blue-500">
              Videos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
