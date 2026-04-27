import Navbar from "../components/Navbar";

const certificates = [
  ["SAP Generative AI", "Issued by SAP", "https://www.credly.com/badges/7f7144eb-dc45-42bb-af67-dde8142949ec/public_url"],
  ["SAP Data Analyst", "Issued by SAP", "https://www.credly.com/badges/e3119213-7153-4c14-8a81-7a935be2b7e9/public_url"],
  ["AWS Generative AI", "Issued by AWS", "https://www.credly.com/badges/ec1e81a4-9495-4011-a692-0df49fee4989"],
  ["Cisco Networking Basics", "Issued by Cisco", "https://www.credly.com/badges/544c82c7-ab9a-4bd1-91c2-0a1bbd9817dd/public_url"],
];

export default function Certificates() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <Navbar />

      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">Certifications</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map(([title, issuer, link]) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-purple-400/50 hover:-translate-y-2 transition"
            >
              <p className="text-sm text-purple-300 mb-3">Verified Credential</p>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-gray-400 mt-2">{issuer}</p>
              <span className="inline-block mt-5 text-sm text-white">
                View Certificate →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}