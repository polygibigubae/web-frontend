import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";
import TopicCards from "./TopicCards";
import TestimonialSection from "./TestimonialSection";
import HighlightSection from "./HighlightSection";
import JoinSection from "./JoinSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <TopicCards />
      <TestimonialSection />
      <HighlightSection />
      <JoinSection />
    </motion.div>
  );
};

export default Home;
