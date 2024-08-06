import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Road Safety Awareness</h1>
        <nav>
          <a href="/login" className="mx-2">
            Login
          </a>
          <a href="#tips" className="mx-2">
            Tips
          </a>
          <a href="#tricks" className="mx-2">
            Tricks
          </a>

          <Link to="/quiz" className="mr-2 ml-2">
            Quizzes
          </Link>
          <Link to="/videos">Videos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
