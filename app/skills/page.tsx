import Navbar from "../components/Navbar";

const skills = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["TensorFlow", "Keras", "OpenCV", "NumPy"],
  },
  {
    title: "Concepts",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis"],
  },
  {
    title: "Web Development",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "PyCharm", "Google Colab"],
  },
  {
    title: "Other",
    items: ["Problem Solving", "Debugging", "Team Collaboration"],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <Navbar />

      <section className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Skills
          </h1>
          <p className="text-gray-400 mt-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <h2 className="text-xl font-bold mb-4 text-blue-300">
                {skill.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-white/10 text-gray-300 text-sm hover:border-blue-400/50 hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}