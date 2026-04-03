import { ArrowRight, Calendar, User } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { useRouter } from "../router";

const blogs = [
  {
    title: "What is Private Label Tea Business?",
    desc: "Learn how white label tea business helps you start your own brand without manufacturing.",
    date: "March 2026",
    author: "PTDM",
    slug: "private-label-tea-business",
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
  },
  {
    title: "Top 5 Tea Packaging Ideas",
    desc: "Explore modern tea packaging styles to make your brand stand out in the market.",
    date: "March 2026",
    author: "PTDM",
    slug: "tea-packaging-ideas",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
  },
  {
    title: "How to Start Tea Business in UAE",
    desc: "Step-by-step guide to launching your tea brand in UAE with low investment.",
    date: "March 2026",
    author: "PTDM",
    slug: "start-tea-business-uae",
    image: "https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg",
  },
];

export default function Blog() {
  const { navigate } = useRouter();

  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <AnimateIn>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">
              Our Blog
            </p>
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-[#152912]">
              Latest Insights & Articles
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <AnimateIn key={blog.slug} delay={i * 100}>
              <div
                onClick={() => navigate(`blog/${blog.slug}`)}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <img src={blog.image} className="h-52 w-full object-cover" />

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {blog.author}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#152912] mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-3">{blog.desc}</p>

                  <span className="text-sm text-green-700 flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("blog")}
            className="px-6 py-3 bg-[#152912] text-white rounded-full"
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}