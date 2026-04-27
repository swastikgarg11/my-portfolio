import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <Navbar />

      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am Swastik Garg, a Computer Science student at SRM Institute of
            Science and Technology with a strong interest in Artificial
            Intelligence, Machine Learning, and Web Development.
            <br /><br />
            I enjoy building practical projects that connect software with
            real-world use cases. My work includes AI-based image classification,
            computer vision projects, and modern portfolio websites using
            Next.js, React, and Tailwind CSS.
            <br /><br />
            I have hands-on experience with Python, TensorFlow, OpenCV, React,
            Next.js, Tailwind CSS, Git, GitHub, and Google Colab. I am currently
            improving my skills in full-stack development, machine learning
            model deployment, and clean UI design.
            <br /><br />
            My goal is to become a skilled software engineer who can build
            reliable, scalable, and useful applications. I am open to
            internships, collaborations, and project-based opportunities where I
            can learn, contribute, and grow.
          </p>
        </div>
      </section>
    </main>
  );
}