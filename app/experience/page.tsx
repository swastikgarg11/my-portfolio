import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <Navbar />

      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">Experience</h1>

        <a
          href="https://drive.google.com/file/d/1FrLgQYLp9oNN3MQ44iOqE3RH78Xt96xP/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-blue-400/50 transition"
        >
          <h2 className="text-3xl font-bold">App Tester Intern</h2>
          <p className="text-blue-300 mt-2">Boron Digital Pvt. Ltd. • 2024</p>

          <ul className="mt-6 text-gray-300 list-disc list-inside space-y-3">
            <li>Tested Android applications to identify bugs, crashes, and performance issues.</li>
            <li>Reported issues clearly with proper steps to reproduce and screenshots when required.</li>
            <li>Worked on improving app reliability, usability, and overall user experience.</li>
            <li>Gained practical exposure to software testing, quality checking, and team-based development workflow.</li>
          </ul>
        </a>
      </section>
    </main>
  );
}