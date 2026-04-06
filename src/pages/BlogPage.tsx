import AnimateIn from "../components/AnimateIn";
import { useRouter, type Page } from "../router";

const blogs = [
  {
    title: "How to Choose the Best White Label Tea Manufacturer in India",
    slug: "blog-white-label-tea-manufacturer-india" as Page,
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
    excerpt: "Starting your own tea brand in India is a profitable and scalable business opportunity. Learn how to choose the right manufacturing partner for consistent quality and growth.",
    category: "Manufacturing",
    readTime: "8 min read",
  },
  {
    title: "What is Private Label Tea Business? Complete Guide 2026",
    slug: "blog-private-label-tea-business" as Page,
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    excerpt: "Discover the benefits of starting a private label tea business and how it can help you build a successful brand with low investment and high returns.",
    category: "Business",
    readTime: "6 min read",
  },
  {
    title: "Top 5 Tea Packaging Ideas That Attract Customers",
    slug: "blog-tea-packaging-ideas" as Page,
    image: "https://images.pexels.com/photos/5946974/pexels-photo-5946974.jpeg",
    excerpt: "Explore creative and modern tea packaging ideas that attract customers and make your brand stand out in the competitive UAE market.",
    category: "Packaging",
    readTime: "5 min read",
  },
  {
    title: "How to Start Your Own Tea Brand in India: Step-by-Step",
    slug: "blog-start-tea-business-india" as Page,
    image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg",
    excerpt: "Learn step-by-step how to launch your tea brand in India with low investment and high scalability. From registration to marketing strategies.",
    category: "Startup Guide",
    readTime: "7 min read",
  },
  {
    title: "Benefits of Private Label Tea for Startups and Entrepreneurs",
    slug: "blog-private-label-tea-benefits" as Page,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    excerpt: "Discover why private label tea is the best business model for startups entering the tea industry with minimal risk and maximum flexibility.",
    category: "Business",
    readTime: "5 min read",
  },
  {
    title: "Bulk Tea Supply Chain Explained: From Farm to Cup",
    slug: "blog-bulk-tea-supply-chain" as Page,
    image: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg",
    excerpt: "Understand how bulk tea sourcing, processing, and distribution works in the global tea market. Essential knowledge for tea business owners.",
    category: "Supply Chain",
    readTime: "6 min read",
  },
  {
    title: "Best Karak Tea in Dubai: What Makes Premium Arabian Tea",
    slug: "blog-best-karak-tea-dubai" as Page,
    image: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg",
    excerpt: "Discover what makes authentic Karak tea the most popular beverage in Dubai and how to source premium blends for your business in the UAE market.",
    category: "Products",
    readTime: "6 min read",
  },
  {
    title: "Tea Manufacturing Process in UAE: Quality Standards Guide",
    slug: "blog-tea-manufacturing-process-uae" as Page,
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg",
    excerpt: "Learn about tea manufacturing standards, quality control processes, and certifications required for tea production in the UAE and GCC markets.",
    category: "Manufacturing",
    readTime: "7 min read",
  },
  {
    title: "Finding the Right Wholesale Tea Supplier in Dubai",
    slug: "blog-wholesale-tea-supplier-dubai" as Page,
    image: "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg",
    excerpt: "Essential guide to finding reliable wholesale tea suppliers in Dubai. What to look for, questions to ask, and red flags to avoid.",
    category: "Sourcing",
    readTime: "5 min read",
  },
  {
    title: "Custom Tea Packaging Solutions in Dubai: Complete Guide",
    slug: "blog-custom-tea-packaging-dubai" as Page,
    image: "https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg",
    excerpt: "Everything you need to know about custom tea packaging in Dubai: formats, MOQ, costs, and how to create packaging that sells your brand.",
    category: "Packaging",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  const { navigate } = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn>
          <header className="text-center mb-16">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Tea Business Knowledge Hub</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Tea Industry Insights & Guides
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guides, tips, and insights about private label tea manufacturing, packaging, and building a successful tea business in Dubai and UAE.
            </p>
          </header>
        </AnimateIn>

        <section aria-label="Blog articles" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <AnimateIn key={blog.slug} delay={i * 100}>
              <article
                onClick={() => navigate(blog.slug)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-[#152912] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{blog.readTime}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span itemProp="author">Porwal Tea</span>
                  </div>
                  <h2 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2" itemProp="headline">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed" itemProp="description">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm">
                    Read Full Article
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
              </article>
            </AnimateIn>
          ))}
        </section>

        <AnimateIn delay={300}>
          <aside className="mt-16 bg-[#152912] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Your Tea Brand?</h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Partner with PTDM for complete private label tea solutions in Dubai. 40+ years of expertise, 25+ premium blends, and dedicated support.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="bg-white text-[#152912] font-semibold px-8 py-3 rounded-full hover:bg-[#c2c89a] transition-colors"
            >
              Get Free Consultation
            </button>
          </aside>
        </AnimateIn>
      </div>
    </main>
  );
}
