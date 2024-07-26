import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tips from "../components/Tips";
import Tricks from "../components/Tricks";
import Statistics from "../components/Statistics";
import CommonMistakes from "../components/CommonMistakes";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main>
        <Hero />
        <Tips />
        <Tricks />
        <CommonMistakes />
        <Statistics />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
