export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

{/* Navbar */}
<nav className="w-full px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/60 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3">

    {/* Logo */}
    <h1 className="text-xl font-bold text-white">SG.</h1>

    {/* Center Links */}
    <div className="hidden md:flex items-center gap-6 text-gray-400">
      <a href="#home" className="hover:text-white">Home</a>
      <a href="#about" className="hover:text-white">About</a>
      <a href="#experience" className="hover:text-white">Experience</a>
      <a href="#skills" className="hover:text-white">Skills</a>
      <a href="#projects" className="hover:text-white">Projects</a>
      <a href="#certificates" className="hover:text-white">Certs</a>

      {/* Resume Section Scroll */}
      <a href="#resume" className="hover:text-white">Resume</a>

      <a href="#contact" className="hover:text-white">Contact</a>
    </div>

    {/* Right Side Buttons */}
    <div className="flex items-center gap-4">

      {/* Direct Resume Link */}
      <a
        href="https://drive.google.com/file/d/1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m/view"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block px-4 py-2 border border-gray-600 rounded-full text-white hover:bg-gray-800 transition"
      >
        CV
      </a>

      {/* Hire Me */}
      <a
        href="#contact"
        className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
      >
        Hire me
      </a>

    </div>

  </div>
</nav>

      {/* Hero */}
      <section className="text-center mt-20">
        <h1 className="text-5xl font-bold">Swastik Garg</h1>
        <p className="mt-4 text-gray-400 text-lg">
          B.Tech CSE | AI & Web Developer
        </p>

        <div className="mt-6 space-x-4">

          <a
            href="https://drive.google.com/file/d/1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m/view"
            target="_blank"
            className="px-6 py-2 bg-white text-black rounded-lg"
          >
            Resume
          </a>

          <a
            href="https://github.com/swastikgarg11"
            target="_blank"
            className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/swastik-garg-110805s20"
            target="_blank"
            className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800"
          >
            LinkedIn
          </a>

        </div>
      </section>

{/* About */}
<section id="about" className="mt-20 max-w-2xl mx-auto text-center px-4">
  <h2 className="text-2xl font-semibold">About Me</h2>

  <p className="mt-4 text-gray-400">
    I am a Computer Science student at SRM University with a strong interest in Artificial Intelligence and Web Development. 
    I enjoy building real-world projects using Python, TensorFlow, and modern web technologies, focusing on solving practical problems.

    <br /><br />

    In the coming years, I aim to become a skilled Software Engineer specializing in AI-driven applications and scalable systems. 
    I am continuously working on improving my development skills, building impactful projects, and preparing myself for industry-level challenges.
  </p>
</section>

{/* Experience */}
<section id="experience" className="mt-20 max-w-5xl mx-auto px-6">
  <h2 className="text-2xl font-semibold text-center">Experience</h2>

  <div className="mt-10 space-y-6">

    {/* Boron Internship */}
    <a
      href="https://drive.google.com/file/d/1FrLgQYLp9oNN3MQ44iOqE3RH78Xt96xP/view"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border border-gray-700 rounded-xl hover:bg-gray-900 hover:scale-[1.02] transition"
    >
      <h3 className="text-xl font-semibold">App Tester Intern</h3>
      <p className="text-gray-400 mt-1">Boron Digital Pvt. Ltd. • 2024</p>

      <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
        <li>Tested Android applications to identify bugs and performance issues</li>
        <li>Reported and documented issues to improve app reliability</li>
        <li>Worked with the team to enhance user experience and functionality</li>
      </ul>
    </a>

  </div>
</section>

      {/* Projects */}
<section id="projects" className="mt-20 max-w-5xl mx-auto px-6">
  <h2 className="text-2xl font-semibold text-center">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    {/* Fruit Classifier */}
    <a
      href="https://github.com/swastikgarg11/fruit-image-classifier"
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-700 rounded-xl hover:scale-105 hover:bg-gray-900 transition block"
    >
      <h3 className="text-xl font-semibold">AI Fruit Classifier</h3>
      <p className="text-gray-400 mt-2">
        CNN model using TensorFlow for multi-class image classification.
      </p>
    </a>

    {/* Currency Detector */}
    <a
      href="https://github.com/swastikgarg11/currency-note-detector"
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-700 rounded-xl hover:scale-105 hover:bg-gray-900 transition block"
    >
      <h3 className="text-xl font-semibold">Currency Note Detector</h3>
      <p className="text-gray-400 mt-2">
        AI model to detect Indian currency notes using image processing.
      </p>
    </a>

  </div>
</section>

{/* Skills */}
<section id="skills" className="mt-20 max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
  <p className="text-center text-gray-400 mt-2">
    Tools I use to build & ship
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

    {/* Languages */}
    <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
      <h3 className="text-xl font-semibold mb-4">Languages</h3>
      <div className="flex flex-wrap gap-2 text-sm text-gray-400">
        <span className="px-3 py-1 border border-gray-600 rounded-full">Python</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Java</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">C++</span>
      </div>
    </div>

    {/* Libraries */}
    <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
      <h3 className="text-xl font-semibold mb-4">Libraries & Frameworks</h3>
      <div className="flex flex-wrap gap-2 text-sm text-gray-400">
        <span className="px-3 py-1 border border-gray-600 rounded-full">TensorFlow</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Keras</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">OpenCV</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">NumPy</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Matplotlib</span>
      </div>
    </div>

    {/* Concepts */}
    <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
      <h3 className="text-xl font-semibold mb-4">Concepts</h3>
      <div className="flex flex-wrap gap-2 text-sm text-gray-400">
        <span className="px-3 py-1 border border-gray-600 rounded-full">CNN</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Computer Vision</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Machine Learning</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Image Processing</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Neural Networks</span>
      </div>
    </div>

    {/* Tools */}
    <div className="p-6 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
      <h3 className="text-xl font-semibold mb-4">Tools</h3>
      <div className="flex flex-wrap gap-2 text-sm text-gray-400">
        <span className="px-3 py-1 border border-gray-600 rounded-full">Git</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">PyCharm</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">VS Code</span>
        <span className="px-3 py-1 border border-gray-600 rounded-full">Google Colab</span>
      </div>
    </div>

  </div>
</section>

      {/* Certificates */}
<section id="certificates" className="mt-20 max-w-5xl mx-auto px-6">
  <h2 className="text-2xl font-semibold text-center">Certificates</h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    {/* SAP Gen AI */}
    <a
      href="https://www.credly.com/badges/7f7144eb-dc45-42bb-af67-dde8142949ec/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-700 rounded-xl hover:scale-105 hover:bg-gray-900 transition block"
    >
      <h3 className="text-xl font-semibold">SAP Generative AI</h3>
      <p className="text-gray-400 mt-2">Credly • SAP Certification</p>
    </a>

    {/* SAP Data Analyst */}
    <a
      href="https://www.credly.com/badges/e3119213-7153-4c14-8a81-7a935be2b7e9/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-700 rounded-xl hover:scale-105 hover:bg-gray-900 transition block"
    >
      <h3 className="text-xl font-semibold">SAP Data Analyst</h3>
      <p className="text-gray-400 mt-2">Credly • Data Analytics Certification</p>
    </a>

    {/* AWS Gen AI */}
    <a
      href="https://www.credly.com/badges/ec1e81a4-9495-4011-a692-0df49fee4989"
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-700 rounded-xl hover:scale-105 hover:bg-gray-900 transition block"
    >
      <h3 className="text-xl font-semibold">AWS Generative AI</h3>
      <p className="text-gray-400 mt-2">Credly • AWS Certification</p>
    </a>

    {/* Cisco */}
    <a
      href="https://www.credly.com/badges/544c82c7-ab9a-4bd1-91c2-0a1bbd9817dd/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-700 rounded-xl hover:scale-105 hover:bg-gray-900 transition block"
    >
      <h3 className="text-xl font-semibold">Networking Basics (Cisco)</h3>
      <p className="text-gray-400 mt-2">Credly • Cisco Certification</p>
    </a>

  </div>
</section>

{/* Resume Section */}
<section id="resume" className="mt-20 max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-sm tracking-widest text-gray-400">RESUME</h2>

  <h1 className="text-4xl md:text-5xl font-bold mt-2">
    My <span className="text-white">Resume</span>
  </h1>

  <p className="text-gray-400 mt-4">
    View or download my latest resume
  </p>

  <div className="mt-10 border border-gray-800 rounded-2xl p-10 bg-black/50 backdrop-blur-md">

    {/* Icon */}
    <div className="w-16 h-16 mx-auto rounded-xl bg-gray-800 flex items-center justify-center text-white text-2xl">
      📄
    </div>

    {/* Name */}
    <h3 className="text-2xl font-semibold mt-6">Swastik Garg</h3>
    <p className="text-gray-400 mt-2">
      AI Developer & Computer Vision Enthusiast
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

      {/* View */}
      <a
        href="https://drive.google.com/file/d/1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m/view"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
      >
        👁 View Resume
      </a>

      {/* Download */}
      <a
        href="https://drive.google.com/uc?export=download&id=1iGT-5dTQN69ggTyxWIdt9l0pKwuY5E7m"
        className="px-6 py-3 rounded-full border border-gray-600 text-white hover:bg-gray-800 transition"
      >
        ⬇ Download Resume
      </a>

    </div>

  </div>

</section>

  {/* Contact */}
<section id="contact" className="mt-20 max-w-6xl mx-auto px-6 pb-16">
  <div className="text-center">
    <p className="text-sm tracking-widest text-gray-500">GET IN TOUCH</p>
    <h2 className="text-4xl md:text-5xl font-bold mt-3">
      Let&apos;s build something brilliant
    </h2>
    <p className="text-gray-400 mt-4">
      Internships, collaborations, or project opportunities — my inbox is open.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8 mt-12">

    {/* Contact Details */}
    <div className="space-y-5">

      <div className="p-5 border border-gray-800 rounded-xl bg-black hover:bg-gray-900 transition">
        <p className="text-sm text-gray-500">EMAIL</p>
        <p className="text-white font-medium mt-1">gargswastik06@gmail.com</p>
      </div>

      <div className="p-5 border border-gray-800 rounded-xl bg-black hover:bg-gray-900 transition">
        <p className="text-sm text-gray-500">PHONE</p>
        <p className="text-white font-medium mt-1">+91 9756018783</p>
      </div>

      <div className="p-5 border border-gray-800 rounded-xl bg-black hover:bg-gray-900 transition">
        <p className="text-sm text-gray-500">LOCATION</p>
        <p className="text-white font-medium mt-1">Bareilly, Uttar Pradesh, India</p>
      </div>

      <div className="p-5 border border-gray-800 rounded-xl bg-black hover:bg-gray-900 transition">
        <p className="text-sm text-gray-500 mb-4">FIND ME ONLINE</p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/swastik-garg-110805s20"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/swastikgarg11"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.hackerrank.com/profile/sg0320"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
          >
            HackerRank
          </a>
        </div>
      </div>
    </div>

    {/* Hiring Message Box */}
    <div className="p-6 border border-gray-800 rounded-xl bg-black">
      <h3 className="text-2xl font-semibold">Want to hire me?</h3>
      <p className="text-gray-400 mt-3">
        I am open to internships, entry-level opportunities, AI projects,
        web development work, and collaborations.
      </p>

      <div className="mt-8 space-y-4 text-gray-300">
        <p>✅ Available for internships</p>
        <p>✅ Interested in AI, Computer Vision, and Web Development</p>
        <p>✅ Comfortable with project-based work and learning new tools</p>
      </div>

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
</section>
    </main>
  );
}