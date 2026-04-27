import Navbar from "../components/Navbar";

const projects = [
  {
    title: "AI Fruit Classifier",
    desc: "Trained a CNN model for multi-class fruit image classification with preprocessing, training, and prediction pipeline.",
    tech: ["Python", "TensorFlow", "CNN"],
    link: "https://github.com/swastikgarg11/fruit-image-classifier",
    image: "/project/fruit-classifier.png",
  },
  {
    title: "Currency Note Detector",
    desc: "Built an AI-based system to detect Indian currency notes using OpenCV and image processing techniques.",
    tech: ["Python", "OpenCV", "Image Processing"],
    link: "https://github.com/swastikgarg11/currency-note-detector",
    image: "/project/currency-detector.png",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <Navbar />

      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-gray-400 mt-4">
            Selected AI, machine learning, and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.20)]"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold">
                    View GitHub →
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-bold group-hover:text-blue-300 transition">
                  {project.title}
                </h2>

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
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}