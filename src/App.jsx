import React from "react";
import { motion } from "framer-motion";
import "./App.scss"; // SASS File Import

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo"></div>
        <div className="nav-links">
          <a href="#mac">Mac</a>
          <a href="#iphone">iPhone</a>
          <a href="#watch">Watch</a>
          <a href="#support">Support</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {/* JS & Framer Motion Integration */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          iPhone 15 Pro
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Titanium. So strong. So light. So Pro.
        </motion.h3>

        <motion.p 
          className="pro-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          A17 Pro chip. A monster win for gaming.
        </motion.p>

        {/* Scroll Reveal Animation on Phone Mockup */}
        <motion.div 
          className="iphone-mockup"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        ></motion.div>
      </section>

      {/* Feature Section Triggered on Scroll */}
      <section className="feature-section">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          The most advanced display ever on an iPhone.
        </motion.h2>
      </section>
    </div>
  );
}

export default App;
