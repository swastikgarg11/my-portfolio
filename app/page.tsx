"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">SG.</h1>

          <div className="hidden md:flex gap-8 text-gray-400 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#certificates" className="hover:text-white">Certs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="https://drive.google.com/file/d/1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-600 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="max-w-5xl text-center">
          <p className="text-gray-400 mb-4">Hello, I am</p>

          <h1 className="text-6xl md:text-8xl font-bold">
            Swastik Garg
          </h1>

          <h2 className="mt-6 text-2xl md:text-4xl text-gray-300">
            AI Developer | Web Developer
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build AI-based and web-based projects using Python, TensorFlow,
            React, Next.js, and modern development tools.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-600 hover:bg-gray-900 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-neutral-950">
        <div className="max-w-5xl">
          <h2 className="text-5xl font-bold text-center mb-10">About Me</h2>

          <div className="border border-gray-800 rounded-2xl p-8 bg-black shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              I am a Computer Science student at SRM University with a strong
              interest in Artificial Intelligence and Web Development. I enjoy
              building real-world projects using Python, TensorFlow, and modern
              web technologies.
              <br /><br />
              In the coming years, I aim to become a skilled Software Engineer
              specializing in AI-driven applications, scalable systems, and
              impactful real-world solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-center mb-12">Tools I use to build and ship</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Languages", ["Python", "Java", "C++"]],
              ["Libraries", ["TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"]],
              ["Concepts", ["CNN", "Machine Learning", "Computer Vision", "Image Processing"]],
              ["Tools", ["Git", "VS Code", "PyCharm", "Google Colab"]],
            ].map(([title, items]: any) => (
              <div key={title} className="border border-gray-800 rounded-2xl p-6 bg-black hover:-translate-y-2 transition">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item: string) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-gray-700 text-gray-300 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Experience */}
<section id="experience" className="min-h-screen flex items-center justify-center px-6 bg-neutral-950">
  <div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>

    <div className="space-y-6">

      <a
        href="https://drive.google.com/file/d/1FrLgQYLp9oNN3MQ44iOqE3RH78Xt96xP/view"
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-gray-800 rounded-2xl p-6 bg-black hover:bg-gray-950 transition"
      >
        <h3 className="text-2xl font-semibold">App Tester Intern</h3>
        <p className="text-gray-400 mt-1">Boron Digital Pvt. Ltd. • 2024</p>

        <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
          <li>Tested Android applications to identify bugs and performance issues.</li>
          <li>Reported and documented issues to improve app reliability.</li>
          <li>Worked with the team to enhance user experience and functionality.</li>
        </ul>
      </a>

    </div>
  </div>
</section>

    {/* Projects */}
<section id="projects" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
  <div className="max-w-4xl w-full">
    <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>

    <div className="relative border-l border-gray-800 space-y-16 pl-6">

      <div className="relative">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-white rounded-full"></span>

        <a
          href="https://github.com/swastikgarg11/fruit-image-classifier"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 rounded-2xl p-8 bg-black hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition"
        >
          <h3 className="text-2xl font-semibold">AI Fruit Classifier</h3>

          <p className="text-gray-400 mt-4">
            Built a Convolutional Neural Network using TensorFlow to classify multiple fruit categories with high accuracy.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Tech: TensorFlow, Python, CNN
          </p>

          <div className="mt-6 flex gap-3">
            <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
              View Code
            </span>
            <span className="px-4 py-2 rounded-full border border-gray-700 text-sm">
              GitHub Repo
            </span>
          </div>
        </a>
      </div>

      <div className="relative">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-white rounded-full"></span>

        <a
          href="https://github.com/swastikgarg11/currency-note-detector"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 rounded-2xl p-8 bg-black hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition"
        >
          <h3 className="text-2xl font-semibold">Currency Note Detector</h3>

          <p className="text-gray-400 mt-4">
            Developed an AI-based system to detect Indian currency notes using image processing and computer vision techniques.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Tech: OpenCV, Python, Image Processing
          </p>

          <div className="mt-6 flex gap-3">
            <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
              View Code
            </span>
            <span className="px-4 py-2 rounded-full border border-gray-700 text-sm">
              GitHub Repo
            </span>
          </div>
        </a>
      </div>

    </div>
  </div>
</section>

{/* Certificates */}
<section id="certificates" className="min-h-screen flex items-center justify-center px-6 bg-neutral-950">
  <div className="max-w-4xl w-full">
    <h2 className="text-5xl font-bold text-center mb-16">Certifications</h2>

    <div className="relative border-l border-gray-800 space-y-16 pl-6">

      <div className="relative">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-white rounded-full"></span>

        <a
          href="https://www.credly.com/badges/7f7144eb-dc45-42bb-af67-dde8142949ec/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 rounded-2xl p-6 bg-black hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition"
        >
          <h3 className="text-xl font-semibold">SAP Generative AI</h3>
          <p className="text-gray-400 mt-2">Issued by SAP • Verified Credential</p>

          <div className="mt-5">
            <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
              View Credential
            </span>
          </div>
        </a>
      </div>

      <div className="relative">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-white rounded-full"></span>

        <a
          href="https://www.credly.com/badges/e3119213-7153-4c14-8a81-7a935be2b7e9/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 rounded-2xl p-6 bg-black hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition"
        >
          <h3 className="text-xl font-semibold">SAP Data Analyst</h3>
          <p className="text-gray-400 mt-2">Issued by SAP • Verified Credential</p>

          <div className="mt-5">
            <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
              View Credential
            </span>
          </div>
        </a>
      </div>

      <div className="relative">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-white rounded-full"></span>

        <a
          href="https://www.credly.com/badges/ec1e81a4-9495-4011-a692-0df49fee4989"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 rounded-2xl p-6 bg-black hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition"
        >
          <h3 className="text-xl font-semibold">AWS Generative AI</h3>
          <p className="text-gray-400 mt-2">Issued by AWS • Verified Credential</p>

          <div className="mt-5">
            <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
              View Credential
            </span>
          </div>
        </a>
      </div>

      <div className="relative">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-white rounded-full"></span>

        <a
          href="https://www.credly.com/badges/544c82c7-ab9a-4bd1-91c2-0a1bbd9817dd/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 rounded-2xl p-6 bg-black hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition"
        >
          <h3 className="text-xl font-semibold">Cisco Networking Basics</h3>
          <p className="text-gray-400 mt-2">Issued by Cisco • Verified Credential</p>

          <div className="mt-5">
            <span className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
              View Credential
            </span>
          </div>
        </a>
      </div>

    </div>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-12">
            Internships, collaborations, or project opportunities — my inbox is open.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="border border-gray-800 rounded-xl p-5">
                <p className="text-gray-500 text-sm">EMAIL</p>
                <p className="text-white mt-1">gargswastik06@gmail.com</p>
              </div>

              <div className="border border-gray-800 rounded-xl p-5">
                <p className="text-gray-500 text-sm">PHONE</p>
                <p className="text-white mt-1">+91 9756018783</p>
              </div>

              <div className="border border-gray-800 rounded-xl p-5">
                <p className="text-gray-500 text-sm">ONLINE</p>
                <div className="flex gap-3 mt-3 flex-wrap">
                  <a href="https://github.com/swastikgarg11" target="_blank" className="px-4 py-2 border border-gray-700 rounded-full">GitHub</a>
                  <a href="https://www.linkedin.com/in/swastik-garg-110805s20" target="_blank" className="px-4 py-2 border border-gray-700 rounded-full">LinkedIn</a>
                  <a href="https://www.hackerrank.com/profile/sg0320" target="_blank" className="px-4 py-2 border border-gray-700 rounded-full">HackerRank</a>
                </div>
              </div>
            </div>

            <div className="border border-gray-800 rounded-2xl p-8 bg-neutral-950">
              <h3 className="text-3xl font-semibold">Want to hire me?</h3>
              <p className="text-gray-400 mt-4">
                I am open to internships, AI projects, web development work, and collaborations.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gargswastik06@gmail.com&su=Hiring%20Opportunity%20for%20Swastik%20Garg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}