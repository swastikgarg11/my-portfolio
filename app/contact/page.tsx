import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <Navbar />

      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-gray-400 mt-4">
            Internships, collaborations, or project opportunities — my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-gray-500 text-sm">EMAIL</p>
              <p className="text-white mt-1">gargswastik06@gmail.com</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-gray-500 text-sm">PHONE</p>
              <p className="text-white mt-1">+91 9756018783</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-gray-500 text-sm">ONLINE</p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <a
                  href="https://github.com/swastikgarg11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/swastik-garg-110805s20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white hover:text-black transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.hackerrank.com/profile/sg0320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white hover:text-black transition"
                >
                  HackerRank
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:border-blue-400/50 transition">
            <h2 className="text-3xl font-bold">Want to hire me?</h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              I am open to internships, AI projects, web development work, and collaborations.
              Feel free to reach out for opportunities, project discussions, or technical collaborations.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gargswastik06@gmail.com&su=Hiring%20Opportunity%20for%20Swastik%20Garg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 transition"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}