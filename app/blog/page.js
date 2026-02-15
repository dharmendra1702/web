export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Why Every Business Needs a Modern Website in 2026",
      date: "Jan 15, 2026",
      content: `
A modern website is no longer optional for businesses. It acts as your digital storefront, builds trust with customers, and drives sales.

In 2026, users expect fast-loading, mobile-friendly, and visually appealing websites. A professional website increases brand credibility, improves search visibility, and helps convert visitors into paying clients.

Businesses without an optimized online presence risk losing customers to competitors who invest in quality web experiences.
      `,
    },
    {
      id: 2,
      title: "How UI/UX Impacts Conversion Rates",
      date: "Jan 10, 2026",
      content: `
UI/UX design directly influences how users interact with your website. Clean layouts, intuitive navigation, and clear call-to-actions guide visitors naturally toward conversions.

Good UX reduces bounce rates and increases engagement. Strategic UI design can improve conversion rates by up to 200% by making user journeys simple and enjoyable.

Investing in UX is investing in revenue.
      `,
    },
    {
      id: 3,
      title: "Website Speed Optimization Guide",
      date: "Jan 02, 2026",
      content: `
Website speed is critical for SEO and user retention. Slow websites frustrate users and negatively impact rankings.

Optimizing images, minimizing JavaScript, using CDN services, and implementing caching significantly improves load times.

A faster website leads to higher engagement, better search rankings, and increased conversions.
      `,
    },
  ];

  return (
    <section className="min-h-screen px-4">

      {/* HEADER OFFSET */}
      <div className="h-24 md:h-32"></div>

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Blog
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical insights to help your business grow online.
          </p>
        </div>

        {/* BLOG POSTS */}
        <div className="space-y-8">

          {posts.map(post => (
            <article
              key={post.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            >
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>

              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {post.title}
              </h2>

              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}
