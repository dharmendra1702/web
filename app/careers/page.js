export default function CareersPage() {
  return (
    <section className="min-h-screen px-4">

      {/* HEADER OFFSET */}
      <div className="h-24 md:h-32"></div>

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Careers at Dharma Web Services
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          We’re always looking for talented individuals who are passionate about
          building modern digital experiences.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            No Current Openings
          </h2>

          <p className="text-gray-400 mb-4">
            At the moment, we do not have any active vacancies.
            However, we are growing and new opportunities may open soon.
          </p>

          <p className="text-gray-400 mb-6">
            If you believe you can add value to our team,
            feel free to share your resume with us.
          </p>

          <a
            href="mailto:dharmawebservice@gmail.com"
            className="inline-block bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            Send Your Resume
          </a>

        </div>

      </div>

    </section>
  );
}
