"use client";

export default function Stats() {
  return (
    <section className="text-center pb-10 px-4 md:px-6 overflow-hidden -mt-20 md:mt-0">
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">

        <div>
          <h3 className="text-4xl font-bold text-purple-400">25+</h3>
          <p className="text-gray-400 mt-2">Websites Built</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-400">100%</h3>
          <p className="text-gray-400 mt-2">Client Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-400">Fast</h3>
          <p className="text-gray-400 mt-2">Delivery Time</p>
        </div>

      </div>
    </section>
  );
}
