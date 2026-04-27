"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <Navbar />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.25),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl text-center relative"
        >
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />

          <p className="inline-block mb-5 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm backdrop-blur-md">
            Available for Internships & Projects
          </p>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            Swastik Garg
          </h1>

          <TypeAnimation
            sequence={[
              "AI Developer",
              1500,
              "Web Developer",
              1500,
              "Computer Vision Enthusiast",
              1500,
              "Software Engineering Learner",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-blue-300 mt-6 block font-semibold"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Computer Science student focused on AI, Machine Learning, and building
            real-world software solutions using Python, TensorFlow, React, Next.js,
            and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-7 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Hire Me
            </a>

            <a
              href="https://github.com/swastikgarg11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["AI", "Projects"],
              ["Web", "Development"],
              ["ML", "Models"],
              ["CV", "OpenCV"],
            ].map(([top, bottom]) => (
              <div
                key={top}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-blue-400/50 hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold text-blue-300">{top}</h3>
                <p className="text-gray-400 text-sm mt-1">{bottom}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}