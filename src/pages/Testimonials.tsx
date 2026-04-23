import { ArrowLeft, Quote, Star, TrendingUp, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Testimonials = () => {
  const navigate = useNavigate();

  const featuredStories = [
    {
      name: "Sarah M.",
      location: "Nairobi",
      avatar: "SM",
      role: "University Student",
      earnings: "KSH 8,500/month",
      quote: "Surveys Pay helped me cover my transport and lunch expenses while studying. The surveys are quick and I can do them between classes. It's the easiest money I've ever made!",
      rating: 5,
      highlight: "Uses earnings for school expenses"
    },
    {
      name: "James K.",
      location: "Mombasa",
      avatar: "JK",
      role: "Small Business Owner",
      earnings: "KSH 12,000/month",
      quote: "I run a small shop and during slow hours, I complete surveys. It's become a reliable secondary income stream. The M-Pesa withdrawals are instant and hassle-free.",
      rating: 5,
      highlight: "Uses downtime productively"
    },
    {
      name: "Grace N.",
      location: "Kisumu",
      avatar: "GN",
      role: "Stay-at-home Mom",
      earnings: "KSH 6,000/month",
      quote: "Being at home with kids, I needed something flexible. Surveys Pay lets me earn while the kids nap. The surveys about parenting products are actually interesting!",
      rating: 5,
      highlight: "Perfect for flexible schedules"
    }
  ];

  const testimonials = [
    {
      name: "Michael O.",
      location: "Nakuru",
      quote: "Started 3 months ago, already withdrawn KSH 15,000. Best part? It's legit. No scams, no stories.",
      rating: 5
    },
    {
      name: "Lucy W.",
      location: "Eldoret",
      quote: "Customer support is amazing. Had an issue with a survey credit and they resolved it within hours.",
      rating: 5
    },
    {
      name: "Peter M.",
      location: "Nairobi",
      quote: "The Gold package was worth every shilling. Premium surveys pay way better. Made my money back in the first week.",
      rating: 5
    },
    {
      name: "Amina H.",
      location: "Mombasa",
      quote: "Finally, a Kenyan platform that actually pays! No more struggling with foreign sites that don't support M-Pesa.",
      rating: 5
    },
    {
      name: "David C.",
      location: "Kiambu",
      quote: "I was skeptical at first, but after my first withdrawal hit my M-Pesa, I was convinced. Now I check for surveys every morning.",
      rating: 5
    },
    {
      name: "Esther R.",
      location: "Thika",
      quote: "The referral program is gold. I invited 10 friends and now earn passive income from their surveys too!",
      rating: 5
    }
  ];

  const stats = [
    { value: "4.8/5", label: "Average Rating", icon: Star },
    { value: "50,000+", label: "Active Users", icon: Users },
    { value: "KSH 10M+", label: "Total Paid Out", icon: TrendingUp },
    { value: "95%", label: "Satisfaction Rate", icon: Award }
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
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Quote className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of Kenyans who are already earning with Surveys Pay. Real people, real earnings, real impact.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 text-center shadow-card">
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <div className="font-display text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Featured Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{story.name}</h3>
                    <p className="text-xs text-muted-foreground">{story.location} • {story.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <div className="bg-primary/5 rounded-xl p-3 mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Monthly Earnings</div>
                  <div className="font-bold text-primary">{story.earnings}</div>
                </div>

                <div className="inline-flex items-center gap-1 text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3" />
                  {story.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-card rounded-2xl p-5 shadow-card"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-primary-foreground"
        >
          <h2 className="font-display text-2xl font-bold mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Join 50,000+ Kenyans already earning with Surveys Pay. Create your free account and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/auth")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 font-semibold text-primary transition hover:opacity-90"
            >
              Start Earning Now
            </button>
            <button
              onClick={() => navigate("/earnings-guide")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/20 px-8 py-4 font-semibold text-primary-foreground transition hover:bg-primary-foreground/30"
            >
              Read Earnings Guide
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
