import { ArrowLeft, Calendar, Clock, User, ChevronRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();

  const featuredPost = {
    title: "How to Maximize Your Survey Earnings: A Complete Guide for Kenyans",
    excerpt: "Learn the proven strategies that top earners use to make KSH 10,000+ monthly from online surveys. From profile optimization to timing your responses, we cover everything you need to know.",
    author: "Surveys Pay Team",
    date: "January 10, 2026",
    readTime: "8 min read",
    category: "Earnings Tips",
    image: "guide",
    slug: "maximize-survey-earnings"
  };

  const posts = [
    {
      title: "10 Legit Ways to Make Money Online in Kenya 2026",
      excerpt: "Discover the most reliable online income opportunities available to Kenyans, from surveys to freelancing and beyond.",
      author: "Sarah M.",
      date: "January 8, 2026",
      readTime: "6 min read",
      category: "Make Money Online",
      slug: "10-ways-make-money-online-kenya"
    },
    {
      title: "Survey Scams: How to Spot and Avoid Them",
      excerpt: "Protect yourself from fraudulent survey sites. Learn the red flags that indicate a scam and how to identify legitimate platforms like Surveys Pay.",
      author: "Surveys Pay Security Team",
      date: "January 5, 2026",
      readTime: "5 min read",
      category: "Safety",
      slug: "avoid-survey-scams"
    },
    {
      title: "M-Pesa Integration: Why It Matters for Online Workers",
      excerpt: "Understanding the importance of local payment methods and how M-Pesa revolutionized online earning opportunities for Kenyans.",
      author: "James K.",
      date: "January 3, 2026",
      readTime: "4 min read",
      category: "Payments",
      slug: "mpesa-online-work"
    },
    {
      title: "Building a Side Hustle Stack: Combining Multiple Income Streams",
      excerpt: "How to strategically combine surveys, gig work, and other opportunities to build a reliable secondary income.",
      author: "Grace N.",
      date: "December 28, 2025",
      readTime: "7 min read",
      category: "Side Hustle",
      slug: "side-hustle-stack"
    },
    {
      title: "The Psychology of Market Research: Why Companies Pay for Your Opinion",
      excerpt: "An inside look at how businesses use consumer feedback to shape products, pricing, and marketing strategies.",
      author: "Dr. Amina H.",
      date: "December 20, 2025",
      readTime: "6 min read",
      category: "Industry Insights",
      slug: "market-research-psychology"
    },
    {
      title: "From Zero to KSH 5,000: My First Month on Surveys Pay",
      excerpt: "A real user's journey starting from scratch, the mistakes made, lessons learned, and strategies that worked.",
      author: "Michael O.",
      date: "December 15, 2025",
      readTime: "5 min read",
      category: "Success Stories",
      slug: "first-month-surveyspay"
    }
  ];

  const categories = [
    "All",
    "Earnings Tips",
    "Make Money Online",
    "Success Stories",
    "Safety",
    "Side Hustle",
    "Industry Insights"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className="font-display text-xl font-bold text-foreground">
            <span className="text-primary">S</span>urveys Pay
          </h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Surveys Pay Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and insights to help you maximize your earnings and navigate the world of online surveys.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                i === 0 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card text-muted-foreground hover:text-foreground shadow-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl overflow-hidden shadow-card mb-12"
        >
          <div className="bg-gradient-to-br from-primary to-accent h-48 md:h-64 flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-primary-foreground/50" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                {featuredPost.category}
              </span>
              <span className="text-xs text-muted-foreground">Featured</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              {featuredPost.title}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {featuredPost.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {featuredPost.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredPost.readTime}
              </div>
            </div>
            <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read Article <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-shadow cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="bg-gradient-to-br from-muted to-muted/50 h-40 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-muted-foreground/30" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary rounded-2xl p-8 mt-12 text-center"
        >
          <h2 className="font-display text-2xl font-bold text-primary-foreground mb-3">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Get the latest earning tips, new feature announcements, and exclusive survey opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-primary-foreground text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
          <p className="text-primary-foreground/60 text-xs mt-4">
            No spam. Unsubscribe anytime. Read our{" "}
            <button onClick={() => navigate("/privacy")} className="underline hover:text-primary-foreground">Privacy Policy</button>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
