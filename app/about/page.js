export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black text-white px-4">

      {/* HEADER OFFSET */}
      <div className="h-24 md:h-32"></div>

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About Dharma Web Services
        </h1>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
          We craft premium, high-performance websites that help businesses grow,
          convert better, and stand out in the digital world.
        </p>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-orange-400">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To empower growing businesses with premium digital experiences
              that increase visibility, trust, and revenue.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-orange-400">
              Our Vision
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To become a leading creative web agency known for design
              excellence, performance, and innovation.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-12 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">

            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-2">Modern UI/UX</h3>
              <p className="text-gray-400 text-sm">
                Clean, premium, and conversion-focused design.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-2">High Performance</h3>
              <p className="text-gray-400 text-sm">
                Fast loading, optimized, and SEO-ready websites.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-400 text-sm">
                Built for growth and long-term success.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
