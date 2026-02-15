export default function TermsPage() {
  return (
    <section className="min-h-screen px-4">

      {/* HEADER OFFSET — REQUIRED */}
      <div className="h-24 md:h-32"></div>

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-400">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-6 text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to Dharma Web Services. By accessing our website or using
              our services, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Services
            </h2>
            <p>
              We provide website development, UI/UX design, and related digital
              services. All services are subject to project scope, timelines,
              and mutual agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Payments
            </h2>
            <p>
              Payments must be made as agreed before or during project delivery.
              Once a project has started, fees are non-refundable unless stated
              otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All designs and code remain the property of Dharma Web Services
              until full payment is received. After payment, ownership is
              transferred to the client unless otherwise agreed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Client Responsibilities
            </h2>
            <p>
              Clients must provide accurate content and feedback in a timely
              manner. Delays caused by clients may impact project timelines.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              Dharma Web Services shall not be liable for any indirect or
              consequential damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Termination
            </h2>
            <p>
              Either party may terminate services if terms are violated. Any
              completed work up to termination will be billed accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms at any time. Continued
              use of our services indicates acceptance of updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              9. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms, please contact us at
              dharmawebservice@gmail.com.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
