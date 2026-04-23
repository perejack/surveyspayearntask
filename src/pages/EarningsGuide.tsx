import { ArrowLeft, TrendingUp, Lightbulb, Target, Clock, Star, AlertCircle, Wallet, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EarningsGuide = () => {
  const navigate = useNavigate();

  const tips = [
    {
      icon: Target,
      title: "Complete Your Profile Fully",
      description: "A complete profile means more survey matches. Fill out every section: demographics, interests, household info, and preferences. Clients target specific groups, so the more we know about you, the more surveys you'll qualify for.",
      impact: "High Impact"
    },
    {
      icon: Clock,
      title: "Check for Surveys Daily",
      description: "New surveys are added throughout the day. Make it a habit to check the platform at least twice daily - morning and evening. High-paying surveys often fill up quickly, so early birds get the best opportunities.",
      impact: "Medium Impact"
    },
    {
      icon: Star,
      title: "Maintain Quality Responses",
      description: "Rushing through surveys or giving inconsistent answers can flag your account. Read questions carefully, provide thoughtful answers, and be consistent. Quality respondents get priority access to premium surveys.",
      impact: "High Impact"
    },
    {
      icon: AlertCircle,
      title: "Enable Notifications",
      description: "Turn on browser and mobile notifications. Many surveys have limited spots and close quickly. Getting instant alerts ensures you never miss high-value opportunities, especially exclusive surveys.",
      impact: "Medium Impact"
    },
    {
      icon: Wallet,
      title: "Strategic Withdrawals",
      description: "Withdraw in larger amounts (KSH 5,000+) to minimize M-Pesa transaction fees. Plan your withdrawals around your financial needs. Emergency withdrawals are instant, but scheduled ones often process faster.",
      impact: "Low Impact"
    },
    {
      icon: Lightbulb,
      title: "Be Honest, Always",
      description: "Survey clients include quality check questions to catch dishonest responses. Getting caught leads to account suspension and forfeited earnings. Honest, thoughtful responses build your reputation and unlock better surveys.",
      impact: "Critical"
    }
  ];

  const earningTiers = [
    {
      title: "Casual Earner",
      time: "1-2 hours/week",
      earnings: "KSH 500 - 1,500/month",
      description: "Complete 5-10 basic surveys per week. Great for pocket money or small savings goals.",
      tips: "Focus on quick 5-minute surveys during commute or breaks"
    },
    {
      title: "Active Participant",
      time: "3-5 hours/week",
      earnings: "KSH 2,500 - 5,000/month",
      description: "Complete 15-25 surveys per week including some premium ones. Requires consistent daily checking.",
      tips: "Target mid-length surveys (10-15 mins) for best time-to-reward ratio"
    },
    {
      title: "Power User",
      time: "7-10 hours/week",
      earnings: "KSH 7,500 - 15,000/month",
      description: "Complete 30+ surveys weekly across all categories. Unlocks highest-paying exclusive surveys.",
      tips: "Upgrade to Gold package for unlimited premium survey access"
    }
  ];

  const strategies = [
    {
      title: "The Morning Routine",
      description: "Check surveys between 7-9 AM when new surveys are typically posted. Complete any quick 5-minute surveys before work/school. Reserve longer surveys for evening when you have more time."
    },
    {
      title: "Category Specialization",
      description: "Focus on 2-3 survey categories you genuinely know about. You'll complete them faster and with better quality. Tech surveys for techies, lifestyle for fashion enthusiasts, etc."
    },
    {
      title: "Weekend Warrior",
      description: "Weekends often have bonus surveys and higher-paying opportunities. Dedicate 2-3 hours on Saturday/Sunday to maximize earnings when competition is lower."
    },
    {
      title: "Referral Program",
      description: "Invite friends and earn 10% of their earnings for life. Share your referral link on social media, WhatsApp groups, or with family. Top referrers earn KSH 10,000+ monthly passively."
    }
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
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Maximize Your Earnings
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn proven strategies from top earners. Follow these tips to increase your survey income and reach your financial goals faster.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "KSH 150", label: "Max per survey" },
            { value: "3-7", label: "Surveys per week" },
            { value: "24hrs", label: "Avg. withdrawal time" },
            { value: "50K+", label: "Happy earners" }
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-2xl p-4 text-center shadow-card">
              <div className="font-display text-xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Top Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Top Earning Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{tip.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        tip.impact === "Critical" ? "bg-red-100 text-red-700" :
                        tip.impact === "High Impact" ? "bg-green-100 text-green-700" :
                        tip.impact === "Medium Impact" ? "bg-yellow-100 text-yellow-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {tip.impact}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Earning Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            How Much Can You Earn?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {earningTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  index === 1 
                    ? "bg-primary text-primary-foreground shadow-premium" 
                    : "bg-card shadow-card"
                }`}
              >
                <h3 className={`font-display text-lg font-bold mb-2 ${
                  index === 1 ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {tier.title}
                </h3>
                <div className={`text-2xl font-bold mb-2 ${
                  index === 1 ? "text-accent" : "text-primary"
                }`}>
                  {tier.earnings}
                </div>
                <div className={`text-sm mb-4 ${
                  index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {tier.time}
                </div>
                <p className={`text-sm mb-4 ${
                  index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {tier.description}
                </p>
                <div className={`p-3 rounded-xl text-xs ${
                  index === 1 ? "bg-primary-foreground/10" : "bg-muted"
                }`}>
                  <strong>Pro Tip:</strong> {tier.tips}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Winning Strategies from Top Earners
          </h2>
          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Things to Remember</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Survey availability varies - some weeks will have more opportunities than others</li>
                <li>• Earnings are supplementary income, not a full-time salary replacement</li>
                <li>• Be patient - building a good profile takes time but pays off</li>
                <li>• Never pay to join or get priority access - Surveys Pay is always free</li>
                <li>• Report any technical issues immediately - we credit for verified bugs</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-primary rounded-2xl p-8 text-center"
        >
          <h2 className="font-display text-2xl font-bold text-primary-foreground mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Join thousands of Kenyans already earning with Surveys Pay. Create your free account today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/auth")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Create Free Account
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/20 px-8 py-4 font-semibold text-primary-foreground transition hover:bg-primary-foreground/30"
            >
              Read FAQ
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarningsGuide;
