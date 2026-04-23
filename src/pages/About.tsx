import { ArrowLeft, Target, Heart, Users, TrendingUp, Award, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Heart,
      title: "User First",
      description: "We prioritize our users' experience and earnings. Every feature we build is designed to help you succeed."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "No hidden fees, no surprises. We believe in clear communication about earnings, withdrawals, and how our platform works."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We partner only with legitimate businesses and ensure every survey meets our quality standards."
    },
    {
      icon: Globe,
      title: "Local Focus",
      description: "Built specifically for Kenyans, with M-Pesa integration and local survey opportunities."
    }
  ];

  const stats = [
    { value: "50,000+", label: "Active Users" },
    { value: "1M+", label: "Surveys Completed" },
    { value: "KSH 10M+", label: "Paid to Users" },
    { value: "100+", label: "Partner Brands" }
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
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <span className="font-display text-4xl font-bold text-primary">S</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Surveys Pay
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Empowering Kenyans to earn money by sharing their opinions. We&apos;re building the future of market research in Africa.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mb-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Surveys Pay was founded in 2025 with a simple mission: create a platform where Kenyans can earn real money by sharing their valuable opinions with brands and organizations that need them.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We noticed a gap in the market research industry in Kenya. While global survey platforms existed, none were designed specifically for the Kenyan market - with M-Pesa integration, local language support, and surveys relevant to Kenyan consumers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, Surveys Pay has grown into one of Kenya&apos;s most trusted survey platforms, connecting thousands of users with earning opportunities while helping businesses make data-driven decisions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-primary/5 rounded-2xl p-6 text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To create sustainable earning opportunities for every Kenyan through the power of their opinions, while helping businesses make better decisions with authentic local insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Africa&apos;s leading platform for consumer insights, empowering millions of people to monetize their knowledge while driving innovation across industries.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary rounded-2xl p-6 md:p-8 mt-8 text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="font-display text-xl font-bold text-primary-foreground mb-3">
            Join Our Growing Community
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Whether you&apos;re here to earn or to gain insights, we&apos;re excited to have you on this journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/auth")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/20 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/30"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Surveys Pay Technologies Ltd • Nairobi, Kenya • © 2026
        </motion.p>
      </div>
    </div>
  );
};

export default About;
