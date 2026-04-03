import AnimateIn from "../components/AnimateIn";
import { useRouter, type Page } from "../router";

const blogs = [
  {
    title: "How to Choose the Best White Label Tea Manufacturer in India",
    slug: "blog-white-label-tea-manufacturer-india" as Page,
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
    excerpt: "Starting your own tea brand in India is a profitable and scalable business opportunity. Learn how to choose the right manufacturing partner.",
  },
  {
    title: "What is Private Label Tea Business?",
    slug: "blog-private-label-tea-business" as Page,
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    excerpt: "Discover the benefits of starting a private label tea business and how it can help you build a successful brand.",
  },
  {
    title: "Top 5 Tea Packaging Ideas",
    slug: "blog-tea-packaging-ideas" as Page,
    image: "https://images.pexels.com/photos/5946974/pexels-photo-5946974.jpeg",
    excerpt: "Explore creative and modern tea packaging ideas that attract customers and make your brand stand out.",
  },
  {
    title: "How to Start Your Own Tea Brand in India",
    slug: "blog-start-tea-business-india" as Page,
    image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg",
    excerpt: "Learn step-by-step how to launch your tea brand in India with low investment and high scalability.",
  },
  {
    title: "Benefits of Private Label Tea for Startups",
    slug: "blog-private-label-tea-benefits" as Page,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    excerpt: "Discover why private label tea is the best business model for startups entering the tea industry.",
  },
  {
    title: "Bulk Tea Supply Chain Explained",
    slug: "blog-bulk-tea-supply-chain" as Page,
    image: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg",
    excerpt: "Understand how bulk tea sourcing, processing, and distribution works in the global tea market.",
  },
];

export default function BlogPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Tea Industry Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover expert guides, tips, and insights about the tea business
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <AnimateIn key={blog.slug} delay={i * 100}>
              <div
                onClick={() => navigate(blog.slug)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
