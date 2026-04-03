import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import AnimateIn from "../components/AnimateIn";
import { useRouter } from "../router";

const blogArticles: Record<string, any> = {
  "blog-white-label-tea-manufacturer-india": {
    title: "How to Choose the Best White Label Tea Manufacturer in India for Your Brand",
    author: "Porwal Tea",
    date: "March 26, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      {
        type: "intro",
        text: "Starting your own tea brand in India is a profitable and scalable business opportunity. With increasing demand for premium, organic, and specialty teas, many entrepreneurs, wholesalers, and retailers are entering this market. However, one of the most important decisions you will make is selecting the right white label tea manufacturer in India.",
      },
      {
        type: "text",
        text: "A reliable manufacturing partner can help you build a strong brand, maintain quality, and scale your business efficiently.",
      },
      {
        type: "heading",
        text: "What is White Label Tea Manufacturing?",
      },
      {
        type: "text",
        text: "White label tea manufacturing is a business model where a manufacturer produces tea products, and you sell them under your own brand name.",
      },
      {
        type: "text",
        text: "Instead of setting up your own factory, you can partner with an experienced manufacturer who handles:",
      },
      {
        type: "list",
        items: [
          "Tea sourcing and blending",
          "Processing and quality control",
          "Packaging and labeling",
          "Bulk supply and logistics"
        ],
      },
      {
        type: "text",
        text: "This allows you to focus on branding, marketing, and sales.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Tea manufacturing process",
      },
      {
        type: "heading",
        text: "Why Choose a White Label Tea Manufacturer in India?",
      },
      {
        type: "text",
        text: "India is one of the largest tea producers in the world, known for its premium varieties like Assam, Darjeeling, and Nilgiri tea.",
      },
      {
        type: "text",
        text: "Choosing a white label tea manufacturer in India offers several advantages:",
      },
      {
        type: "subheading",
        text: "1. Access to High-Quality Tea",
      },
      {
        type: "text",
        text: "India provides direct access to fresh tea leaves from top tea gardens, ensuring superior quality and flavor.",
      },
      {
        type: "subheading",
        text: "2. Cost-Effective Production",
      },
      {
        type: "text",
        text: "Manufacturing in India is cost-efficient compared to many other countries, helping you maintain better profit margins.",
      },
      {
        type: "subheading",
        text: "3. Wide Product Range",
      },
      {
        type: "text",
        text: "From black tea and green tea to herbal and flavored blends, Indian manufacturers offer diverse options.",
      },
      {
        type: "subheading",
        text: "4. Export Opportunities",
      },
      {
        type: "text",
        text: "Indian tea manufacturers are experienced in global exports, making it easier to expand internationally.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Tea packaging varieties",
      },
      {
        type: "heading",
        text: "Key Factors to Consider When Choosing a Manufacturer",
      },
      {
        type: "text",
        text: "Selecting the right partner is critical for your brand success. Here are the key factors to evaluate:",
      },
      {
        type: "subheading",
        text: "1. Experience and Reputation",
      },
      {
        type: "text",
        text: "Always choose a manufacturer with proven experience in white label tea production. Check their client portfolio, reviews, and market presence.",
      },
      {
        type: "subheading",
        text: "2. Customization Options",
      },
      {
        type: "text",
        text: "A good manufacturer should offer:",
      },
      {
        type: "list",
        items: [
          "Custom tea blends",
          "Unique flavors",
          "Flexible packaging options",
          "Branding support"
        ],
      },
      {
        type: "text",
        text: "This helps you create a distinct identity in the market.",
      },
      {
        type: "subheading",
        text: "3. Quality Assurance",
      },
      {
        type: "text",
        text: "Quality is everything in the tea business. Ensure the manufacturer follows strict quality control processes, including:",
      },
      {
        type: "list",
        items: [
          "Hygienic production standards",
          "Lab testing",
          "Consistent taste and aroma"
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Quality tea leaves",
      },
      {
        type: "subheading",
        text: "4. Packaging Capabilities",
      },
      {
        type: "text",
        text: "Modern consumers are attracted to premium packaging. Look for services like:",
      },
      {
        type: "list",
        items: [
          "Tea bags",
          "Loose leaf packaging",
          "Eco-friendly packaging",
          "Private labeling"
        ],
      },
      {
        type: "subheading",
        text: "5. Minimum Order Quantity (MOQ)",
      },
      {
        type: "text",
        text: "If you are a startup, choose a manufacturer that offers low MOQ so you can start small and scale gradually.",
      },
      {
        type: "subheading",
        text: "6. Pricing and Transparency",
      },
      {
        type: "text",
        text: "Transparent pricing ensures there are no hidden costs. Compare multiple manufacturers before finalizing.",
      },
      {
        type: "heading",
        text: "Common Mistakes to Avoid",
      },
      {
        type: "text",
        text: "When choosing a white label tea manufacturer in India, avoid these mistakes:",
      },
      {
        type: "list",
        items: [
          "Selecting based only on price",
          "Ignoring quality checks",
          "Not asking for product samples",
          "Overlooking packaging quality",
          "Choosing manufacturers with poor communication"
        ],
      },
      {
        type: "text",
        text: "A wrong decision can affect your brand reputation and customer trust.",
      },
      {
        type: "heading",
        text: "Why the Right Partner Matters",
      },
      {
        type: "text",
        text: "Your manufacturer is not just a supplier — they are your long-term business partner. A reliable partner ensures:",
      },
      {
        type: "list",
        items: [
          "Consistent product quality",
          "Timely delivery",
          "Scalability as your business grows",
          "Support in product innovation"
        ],
      },
      {
        type: "text",
        text: "This directly impacts your brand success and customer satisfaction.",
      },
      {
        type: "heading",
        text: "Final Thoughts",
      },
      {
        type: "text",
        text: "Choosing the right white label tea manufacturer in India is the foundation of your tea business. Take time to research, compare options, and test product quality before making a decision.",
      },
      {
        type: "text",
        text: "A trusted manufacturing partner will help you build a premium tea brand that stands out in a competitive market.",
      },
    ],
  },
  "blog-private-label-tea-business": {
    title: "What is Private Label Tea Business?",
    author: "Porwal Tea",
    date: "March 25, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      {
        type: "intro",
        text: "Starting a private label tea business is one of the most profitable ventures for entrepreneurs looking to enter the tea industry without the massive overhead of setting up their own manufacturing facility.",
      },
      {
        type: "heading",
        text: "Understanding Private Label Tea Business",
      },
      {
        type: "text",
        text: "A private label tea business allows you to create your own branded tea products using a manufacturer's facilities and expertise. You control the branding, packaging, and marketing while the manufacturer handles production.",
      },
      {
        type: "heading",
        text: "Key Advantages",
      },
      {
        type: "list",
        items: [
          "Low startup costs - no need for expensive manufacturing equipment",
          "Quick market entry - start selling in weeks, not months",
          "Brand control - full ownership of your brand identity",
          "Scalability - grow without facility constraints",
          "Quality assurance - work with experienced manufacturers",
          "Focus on sales and marketing - let experts handle production"
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Private label tea products",
      },
      {
        type: "heading",
        text: "Getting Started with Private Label Tea",
      },
      {
        type: "text",
        text: "To launch your private label tea business:",
      },
      {
        type: "list",
        items: [
          "Define your target market and tea preferences",
          "Research and select a reliable manufacturer",
          "Develop your brand identity and packaging",
          "Place your first order (usually with low MOQ)",
          "Build your sales and marketing strategy",
          "Scale as demand grows"
        ],
      },
      {
        type: "heading",
        text: "Why Choose This Model?",
      },
      {
        type: "text",
        text: "The private label model is ideal for entrepreneurs who want to build a tea brand without the operational burden of manufacturing. It offers flexibility, lower risk, and faster returns on investment.",
      },
    ],
  },
  "blog-tea-packaging-ideas": {
    title: "Top 5 Tea Packaging Ideas",
    author: "Porwal Tea",
    date: "March 24, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      {
        type: "intro",
        text: "Tea packaging is more than just a container—it's your brand's first impression. Here are the top 5 innovative tea packaging ideas that attract customers and enhance your brand value.",
      },
      {
        type: "heading",
        text: "1. Eco-Friendly Kraft Paper Boxes",
      },
      {
        type: "text",
        text: "Sustainable packaging is trending. Kraft paper boxes are biodegradable, cost-effective, and appeal to environmentally conscious consumers. They can be customized with your brand colors and messaging.",
      },
      {
        type: "heading",
        text: "2. Premium Glass Jars",
      },
      {
        type: "text",
        text: "Glass jars offer a luxurious feel and keep tea fresh longer. They're reusable, which encourages customer loyalty. Perfect for loose-leaf premium teas.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Glass jar tea packaging",
      },
      {
        type: "heading",
        text: "3. Individual Tea Sachets",
      },
      {
        type: "text",
        text: "Individually wrapped tea sachets provide convenience and portion control. They're ideal for gift sets and attract busy professionals.",
      },
      {
        type: "heading",
        text: "4. Minimalist Design Packages",
      },
      {
        type: "text",
        text: "Clean, minimalist designs with ample white space convey premium quality. Focus on typography and a single accent color to create a sophisticated look.",
      },
      {
        type: "heading",
        text: "5. Custom Gift Boxes",
      },
      {
        type: "text",
        text: "Multi-tea gift boxes with personalized messaging make perfect corporate gifts. They significantly increase average order value and brand visibility.",
      },
      {
        type: "list",
        items: [
          "Include variety of flavors for broader appeal",
          "Use high-quality printing for premium appearance",
          "Add personalization options",
          "Include brewing instructions",
          "Consider seasonal and occasion-based designs"
        ],
      },
    ],
  },
  "blog-start-tea-business-india": {
    title: "How to Start Your Own Tea Brand in India",
    author: "Porwal Tea",
    date: "March 23, 2026",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      {
        type: "intro",
        text: "Starting your own tea brand in India is an exciting and profitable business venture. With low initial investment and high market demand, it's one of the most accessible businesses for entrepreneurs.",
      },
      {
        type: "heading",
        text: "Step 1: Market Research",
      },
      {
        type: "text",
        text: "Before launching, understand your target audience. Are you targeting health-conscious millennials, traditional tea drinkers, or corporate clients? This determines your product range and pricing strategy.",
      },
      {
        type: "heading",
        text: "Step 2: Choose Your Business Model",
      },
      {
        type: "list",
        items: [
          "White Label - Partner with a manufacturer who produces under your brand",
          "Private Label - Customize existing products with your branding",
          "Own Manufacturing - Highest investment but full control",
        ],
      },
      {
        type: "text",
        text: "For most startups, white or private label is the smartest choice due to lower risk and faster market entry.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Tea business planning",
      },
      {
        type: "heading",
        text: "Step 3: Select Your Product Range",
      },
      {
        type: "text",
        text: "Start with 3-5 varieties that appeal to your target market:",
      },
      {
        type: "list",
        items: [
          "Black Tea (CTC or Orthodox)",
          "Green Tea (Plain or Flavored)",
          "Herbal/Wellness Teas",
          "Masala Chai",
          "Specialty Blends",
        ],
      },
      {
        type: "heading",
        text: "Step 4: Find a Reliable Manufacturer",
      },
      {
        type: "text",
        text: "Your manufacturer partnership is critical. Look for:",
      },
      {
        type: "list",
        items: [
          "Proven track record and certifications",
          "Flexible minimum order quantities",
          "Quality consistency",
          "Packaging and labeling services",
          "Transparent pricing",
        ],
      },
      {
        type: "heading",
        text: "Step 5: Brand Development",
      },
      {
        type: "text",
        text: "Create a memorable brand identity:",
      },
      {
        type: "list",
        items: [
          "Unique brand name and logo",
          "Professional packaging design",
          "Clear brand story and values",
          "Consistent visual identity",
        ],
      },
      {
        type: "heading",
        text: "Step 6: Legal Requirements",
      },
      {
        type: "text",
        text: "Register your business and obtain necessary licenses:",
      },
      {
        type: "list",
        items: [
          "Business registration (Sole Proprietorship/LLP/Pvt Ltd)",
          "FSSAI License (mandatory for food products)",
          "GST Registration",
          "Trademark registration (recommended)",
        ],
      },
      {
        type: "heading",
        text: "Step 7: Sales and Distribution",
      },
      {
        type: "text",
        text: "Develop multiple sales channels:",
      },
      {
        type: "list",
        items: [
          "Online marketplace (Amazon, Flipkart)",
          "Own e-commerce website",
          "Local retail stores",
          "Corporate gifting",
          "Wholesale distribution",
        ],
      },
      {
        type: "heading",
        text: "Investment Breakdown",
      },
      {
        type: "text",
        text: "Expected initial investment (approximate):",
      },
      {
        type: "list",
        items: [
          "Product inventory: ₹50,000 - ₹2,00,000",
          "Branding and packaging: ₹20,000 - ₹50,000",
          "Legal and licenses: ₹10,000 - ₹30,000",
          "Marketing and website: ₹30,000 - ₹1,00,000",
          "Total: ₹1,10,000 - ₹3,80,000",
        ],
      },
      {
        type: "text",
        text: "Start small, test your market, and scale gradually based on demand.",
      },
    ],
  },
  "blog-private-label-tea-benefits": {
    title: "Benefits of Private Label Tea for Startups",
    author: "Porwal Tea",
    date: "March 22, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      {
        type: "intro",
        text: "For startups entering the tea industry, private label manufacturing offers the perfect balance of low risk, quick market entry, and brand building potential.",
      },
      {
        type: "heading",
        text: "1. Low Startup Costs",
      },
      {
        type: "text",
        text: "Starting a tea manufacturing facility requires significant capital investment in equipment, facility setup, and licensing. Private label eliminates these costs entirely.",
      },
      {
        type: "text",
        text: "You can launch your brand with as little as ₹50,000 - ₹1,00,000, focusing your budget on branding and marketing instead.",
      },
      {
        type: "heading",
        text: "2. Speed to Market",
      },
      {
        type: "text",
        text: "Building your own facility takes months or years. With private label, you can have products ready to sell within 2-4 weeks after finalizing your branding and placing an order.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Fast market entry with private label",
      },
      {
        type: "heading",
        text: "3. Focus on Core Business",
      },
      {
        type: "text",
        text: "Manufacturing is complex and requires expertise in:",
      },
      {
        type: "list",
        items: [
          "Raw material sourcing and quality control",
          "Production processes and equipment maintenance",
          "Regulatory compliance and certifications",
          "Inventory and supply chain management",
        ],
      },
      {
        type: "text",
        text: "Private label lets you focus on what matters most: building your brand, marketing, and sales.",
      },
      {
        type: "heading",
        text: "4. Professional Quality from Day One",
      },
      {
        type: "text",
        text: "Established manufacturers have perfected their processes over years. You immediately benefit from their expertise, ensuring consistent quality that builds customer trust.",
      },
      {
        type: "heading",
        text: "5. Scalability Without Risk",
      },
      {
        type: "text",
        text: "Start with small orders to test your market. As demand grows, increase order quantities without worrying about production capacity. Your manufacturer handles the scaling seamlessly.",
      },
      {
        type: "heading",
        text: "6. Product Innovation",
      },
      {
        type: "text",
        text: "Experienced manufacturers can help you develop custom blends and unique flavors. They have the expertise and infrastructure to test and perfect new products.",
      },
      {
        type: "heading",
        text: "7. Complete Brand Control",
      },
      {
        type: "text",
        text: "Despite using a manufacturer, you maintain full control over:",
      },
      {
        type: "list",
        items: [
          "Brand name and identity",
          "Packaging design",
          "Pricing strategy",
          "Sales channels",
          "Customer relationships",
        ],
      },
      {
        type: "text",
        text: "The manufacturer remains invisible to your customers - it's entirely your brand.",
      },
      {
        type: "heading",
        text: "Perfect for Testing Ideas",
      },
      {
        type: "text",
        text: "Private label is ideal for validating your business concept before making larger investments. Test different products, packaging, and markets with minimal financial commitment.",
      },
    ],
  },
  "blog-bulk-tea-supply-chain": {
    title: "Bulk Tea Supply Chain Explained",
    author: "Porwal Tea",
    date: "March 21, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      {
        type: "intro",
        text: "Understanding the bulk tea supply chain is crucial for anyone in the tea business. From garden to cup, multiple stages ensure quality and consistency in your final product.",
      },
      {
        type: "heading",
        text: "Stage 1: Tea Cultivation",
      },
      {
        type: "text",
        text: "Tea is grown primarily in Assam, Darjeeling, Nilgiris, and other regions across India. Factors affecting quality:",
      },
      {
        type: "list",
        items: [
          "Altitude and climate",
          "Soil composition",
          "Plucking standards (two leaves and a bud vs. coarser plucks)",
          "Growing practices (organic vs. conventional)",
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Tea cultivation",
      },
      {
        type: "heading",
        text: "Stage 2: Processing",
      },
      {
        type: "text",
        text: "Fresh leaves undergo processing to create different tea types:",
      },
      {
        type: "subheading",
        text: "Orthodox Method",
      },
      {
        type: "text",
        text: "Traditional method preserving whole leaves. Results in higher-quality tea with distinct flavor profiles. Used for premium teas.",
      },
      {
        type: "subheading",
        text: "CTC Method (Crush, Tear, Curl)",
      },
      {
        type: "text",
        text: "Modern industrial method producing granular tea. Faster brewing, stronger flavor. Ideal for tea bags and mass-market products.",
      },
      {
        type: "heading",
        text: "Stage 3: Quality Testing and Grading",
      },
      {
        type: "text",
        text: "Professional tea tasters evaluate:",
      },
      {
        type: "list",
        items: [
          "Appearance (leaf size, color)",
          "Aroma (dry and infused)",
          "Liquor color",
          "Taste profile (briskness, body, astringency)",
          "Mouthfeel and finish",
        ],
      },
      {
        type: "text",
        text: "Tea is graded based on quality parameters and assigned grades (e.g., FTGFOP, TGFOP for orthodox; BP, BOP for CTC).",
      },
      {
        type: "heading",
        text: "Stage 4: Auction and Trading",
      },
      {
        type: "text",
        text: "Major auction centers in India:",
      },
      {
        type: "list",
        items: [
          "Kolkata (largest)",
          "Guwahati",
          "Coonoor",
          "Coimbatore",
        ],
      },
      {
        type: "text",
        text: "Bulk buyers, blenders, and exporters purchase directly from auctions or through brokers. Prices vary based on quality, demand, and market conditions.",
      },
      {
        type: "heading",
        text: "Stage 5: Blending",
      },
      {
        type: "text",
        text: "Manufacturers blend teas from different origins to:",
      },
      {
        type: "list",
        items: [
          "Achieve consistent taste profiles year-round",
          "Balance flavor, strength, and price points",
          "Create signature blends",
          "Meet specific customer requirements",
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Tea blending process",
      },
      {
        type: "heading",
        text: "Stage 6: Packaging",
      },
      {
        type: "text",
        text: "Tea is packaged in various formats:",
      },
      {
        type: "list",
        items: [
          "Bulk packaging (25kg bags) for B2B",
          "Retail packaging (loose leaf, tea bags)",
          "Private label packaging with custom branding",
          "Export-grade packaging with moisture barriers",
        ],
      },
      {
        type: "heading",
        text: "Stage 7: Distribution",
      },
      {
        type: "text",
        text: "Final products reach consumers through:",
      },
      {
        type: "list",
        items: [
          "Wholesale distributors",
          "Retail chains and supermarkets",
          "E-commerce platforms",
          "Direct to consumer (D2C) brands",
          "Food service (hotels, restaurants, cafes)",
          "Export to international markets",
        ],
      },
      {
        type: "heading",
        text: "Key Factors for Quality Supply Chain",
      },
      {
        type: "list",
        items: [
          "Proper storage (cool, dry, away from strong odors)",
          "Quick turnover to ensure freshness",
          "Transparent sourcing and traceability",
          "Quality testing at multiple stages",
          "Reliable logistics partners",
          "Compliance with food safety standards",
        ],
      },
      {
        type: "text",
        text: "Understanding this supply chain helps you make informed decisions about sourcing, quality expectations, and pricing when starting your tea brand.",
      },
    ],
  },
};

export default function BlogDetail() {
  const { navigate, page } = useRouter();

  const article = blogArticles[page];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The blog article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('blog')}
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 bg-gradient-to-br from-emerald-600 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <AnimateIn>
            <button
              onClick={() => navigate('blog')}
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group w-fit"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="flex items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {article.content.map((block: any, index: number) => {
            switch (block.type) {
              case "intro":
                return (
                  <AnimateIn key={index} delay={index * 50}>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                      {block.text}
                    </p>
                  </AnimateIn>
                );

              case "text":
                return (
                  <AnimateIn key={index} delay={Math.min(index * 30, 500)}>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {block.text}
                    </p>
                  </AnimateIn>
                );

              case "heading":
                return (
                  <AnimateIn key={index} delay={Math.min(index * 30, 500)}>
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                      {block.text}
                    </h2>
                  </AnimateIn>
                );

              case "subheading":
                return (
                  <AnimateIn key={index} delay={Math.min(index * 30, 500)}>
                    <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {block.text}
                    </h3>
                  </AnimateIn>
                );

              case "list":
                return (
                  <AnimateIn key={index} delay={Math.min(index * 30, 500)}>
                    <ul className="list-none space-y-3 mb-6 ml-0">
                      {block.items?.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimateIn>
                );

              case "image":
                return (
                  <AnimateIn key={index} delay={Math.min(index * 30, 500)}>
                    <div className="my-12 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full h-auto"
                      />
                    </div>
                  </AnimateIn>
                );

              default:
                return null;
            }
          })}
        </article>

        <AnimateIn delay={100}>
          <div className="mt-16 p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Tea Brand?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Partner with Porwal Tea, a trusted white label tea manufacturer in India. We offer premium quality, custom blends, and comprehensive support to help you build a successful tea business.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
