export default function PrivacyPage() {
  return (
    <section className="min-h-screen px-4">

      {/* HEADER OFFSET — REQUIRED */}
      <div className="h-24 md:h-32"></div>

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400">
            Your privacy is important to us. This policy explains how we handle
            your personal information.
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-6 text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect your name, email address, phone number, and message
              content when you contact us or subscribe to our newsletter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to respond to inquiries, provide services,
              send updates, and improve our offerings. We do not sell or share
              your personal data with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance user experience and analyze
              traffic. You can disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your data.
              However, no online transmission is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party tools such as Formspree for form submissions.
              These services have their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please email
              us at dharmawebservice@gmail.com.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
