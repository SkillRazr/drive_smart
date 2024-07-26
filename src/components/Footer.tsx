import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Drive Smart. All rights reserved.</p>
    </footer>
  );
};

export default Footer;