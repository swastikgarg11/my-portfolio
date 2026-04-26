"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const sectionAnimation = {
  hidden: { opacity: 0, y: 70, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  ["Languages", ["Python", "Java", "C++"]],
  ["Libraries", ["TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"]],
  ["Concepts", ["CNN", "Machine Learning", "Computer Vision", "Image Processing"]],
  ["Tools", ["Git", "VS Code", "PyCharm", "Google Colab"]],
];

const projects = [
  {
    title: "AI Fruit Classifier",
    desc: "Built a CNN model using TensorFlow to classify multiple fruit categories with strong accuracy.",
    tech: ["Python", "TensorFlow", "CNN"],
    link: "https://github.com/swastikgarg11/fruit-image-classifier",
  },
  {
    title: "Currency Note Detector",
    desc: "Developed an AI-based system to detect Indian currency notes using image processing and computer vision.",
    tech: ["Python", "OpenCV", "Image Processing"],
    link: "https://github.com/swastikgarg11/currency-note-detector",
  },
];

const certificates = [
  ["SAP Generative AI", "Issued by SAP", "https://www.credly.com/badges/7f7144eb-dc45-42bb-af67-dde8142949ec/public_url"],
  ["SAP Data Analyst", "Issued by SAP", "https://www.credly.com/badges/e3119213-7153-4c14-8a81-7a935be2b7e9/public_url"],
  ["AWS Generative AI", "Issued by AWS", "https://www.credly.com/badges/ec1e81a4-9495-4011-a692-0df49fee4989"],
  ["Cisco Networking Basics", "Issued by Cisco", "https://www.credly.com/badges/544c82c7-ab9a-4bd1-91c2-0a1bbd9817dd/public_url"],
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 mt-4">{subtitle}</p>}
    </div>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "certificates",
      "contact",
    ];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_32%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="#home" className="text-2xl font-black tracking-tight">
      SG<span className="text-blue-400">.</span>
    </a>

    <div className="hidden md:flex gap-8 text-sm">
      {[
        ["Home", "home"],
        ["About", "about"],
        ["Skills", "skills"],
        ["Experience", "experience"],
        ["Projects", "projects"],
        ["Certificates", "certificates"],
        ["Contact", "contact"],
      ].map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          className={`relative transition ${
            activeSection === id
              ? "text-blue-400 font-semibold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {label}

          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition ${
              activeSection === id ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>
      ))}
    </div>

    <a
      href="https://drive.google.com/file/d/1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m/view"
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
    >
      Resume
    </a>
  </div>
</nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl text-center relative"
        >
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

          <p className="inline-block mb-5 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">
            Available for internships & projects
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
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-blue-300 mt-6 block font-semibold"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Computer Science student building AI, web development, and real-world software projects using Python, TensorFlow, React, Next.js, and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 transition">
              View Projects
            </a>
            <a href="#contact" className="px-7 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition">
              Hire Me
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-28 px-6">
        <RevealSection>
          <div className="max-w-5xl mx-auto">
            <SectionTitle title="About Me" />
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-2xl">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                I am a Computer Science student at SRM University with a strong interest in Artificial Intelligence and Web Development. I enjoy building real-world projects using Python, TensorFlow, and modern web technologies.
                <br /><br />
                My goal is to become a skilled Software Engineer who can build AI-driven applications, scalable systems, and practical solutions that solve real problems.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      <section id="skills" className="py-28 px-6">
        <RevealSection>
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="Tech Stack" subtitle="Tools and technologies I use to build projects" />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.map(([title, items]) => (
                <motion.div
                  variants={cardAnimation}
                  transition={{ duration: 0.5 }}
                  key={title as string}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/50 hover:bg-white/10"
                >
                  <h3 className="text-xl font-bold mb-5 group-hover:text-blue-300 transition">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[]).map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-300 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealSection>
      </section>

      <section id="experience" className="py-28 px-6">
        <RevealSection>
          <div className="max-w-5xl mx-auto">
            <SectionTitle title="Experience" />

            <motion.a
              variants={cardAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              href="https://drive.google.com/file/d/1FrLgQYLp9oNN3MQ44iOqE3RH78Xt96xP/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-purple-400/50 hover:bg-white/10"
            >
              <h3 className="text-3xl font-bold">App Tester Intern</h3>
              <p className="text-blue-300 mt-2">Boron Digital Pvt. Ltd. • 2024</p>
              <ul className="mt-6 text-gray-300 list-disc list-inside space-y-3">
                <li>Tested Android applications to identify bugs and performance issues.</li>
                <li>Reported and documented issues to improve app reliability.</li>
                <li>Worked with the team to enhance user experience and functionality.</li>
              </ul>
            </motion.a>
          </div>
        </RevealSection>
      </section>

      <section id="projects" className="py-28 px-6">
  <RevealSection>
    <div className="max-w-6xl mx-auto">
      <SectionTitle
        title="Projects"
        subtitle="Selected AI and development projects"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {[
          {
            title: "AI Fruit Classifier",
            desc: "Built a CNN model using TensorFlow to classify multiple fruit categories with strong accuracy.",
            tech: ["Python", "TensorFlow", "CNN"],
            link: "https://github.com/swastikgarg11/fruit-image-classifier",
            image: "/project/fruit-classifier.png",
          },
          {
            title: "Currency Note Detector",
            desc: "Developed an AI-based system to detect Indian currency notes using image processing and computer vision.",
            tech: ["Python", "OpenCV", "Image Processing"],
            link: "https://github.com/swastikgarg11/currency-note-detector",
            image: "/project/currency-detector.png",
          },
        ].map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnimation}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/50 hover:bg-white/10"
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

              {/* BUTTON */}
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold">
                  View GitHub →
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7">
              <h3 className="text-2xl font-bold group-hover:text-blue-300 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </RevealSection>
</section>

      <section id="certificates" className="py-28 px-6">
        <RevealSection>
          <div className="max-w-5xl mx-auto">
            <SectionTitle title="Certifications" subtitle="Verified credentials and learning achievements" />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {certificates.map(([title, issuer, link]) => (
                <motion.a
                  variants={cardAnimation}
                  transition={{ duration: 0.5 }}
                  key={title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-purple-400/50 hover:bg-white/10"
                >
                  <p className="text-sm text-purple-300 mb-3">Verified Credential</p>
                  <h3 className="text-xl font-bold group-hover:text-purple-300 transition">{title}</h3>
                  <p className="text-gray-400 mt-2">{issuer}</p>
                  <span className="inline-block mt-5 text-sm text-white">
                    View Certificate →
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </RevealSection>
      </section>

      <section id="contact" className="py-28 px-6">
        <RevealSection>
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="Get In Touch" subtitle="Internships, collaborations, or project opportunities — my inbox is open." />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={cardAnimation} className="space-y-5">
                {[
                  ["EMAIL", "gargswastik06@gmail.com"],
                  ["PHONE", "+91 9756018783"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <p className="text-gray-500 text-sm">{label}</p>
                    <p className="text-white mt-1">{value}</p>
                  </div>
                ))}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-gray-500 text-sm">ONLINE</p>
                  <div className="flex gap-3 mt-3 flex-wrap">
                    <a href="https://github.com/swastikgarg11" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/swastik-garg-110805s20" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition">LinkedIn</a>
                    <a href="https://www.hackerrank.com/profile/sg0320" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition">HackerRank</a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardAnimation} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h3 className="text-3xl font-bold">Want to hire me?</h3>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  I am open to internships, AI projects, web development work, and collaborations.
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gargswastik06@gmail.com&su=Hiring%20Opportunity%20for%20Swastik%20Garg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 transition"
                >
                  Send Message
                </a>
              </motion.div>
            </motion.div>
          </div>
        </RevealSection>
      </section>
    </main>
  );
}