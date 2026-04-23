import { ArrowLeft, Shield, Eye, Lock, FileText, Cookie, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: `We collect information you provide directly to us when you:
      • Create an account (name, email, phone number, M-Pesa details)
      • Complete surveys (demographic information, opinions, responses)
      • Contact our support team
      • Participate in promotions or contests
      
      We also automatically collect:
      • Device information (IP address, browser type, operating system)
      • Usage data (pages visited, time spent, survey completion rates)
      • Location data (country/region for survey matching)`
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: `Your information helps us:
      • Provide and improve our survey services
      • Match you with relevant surveys
      • Process M-Pesa payments and withdrawals
      • Send notifications about new surveys and earnings
      • Prevent fraud and ensure platform security
      • Comply with legal obligations
      
      We use aggregated, anonymized data for market research purposes only.`
    },
    {
      icon: Shield,
      title: "Data Protection & Security",
      content: `We implement industry-standard security measures:
      • SSL encryption for all data transmission
      • Secure servers with restricted access
      • Regular security audits and updates
      • Employee training on data protection
      
      While we take all reasonable precautions, no internet transmission is 100% secure. We continuously improve our security practices.`
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: `We do NOT sell your personal information. We only share data with:
      • Survey clients (anonymized aggregated responses only)
      • Payment processors (M-Pesa/Safaricom for withdrawals)
      • Service providers (hosting, analytics, customer support)
      • Legal authorities (when required by law)
      
      All third-party partners are bound by strict confidentiality agreements.`
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking",
      content: `We use cookies and similar technologies to:
      • Keep you logged in
      • Remember your preferences
      • Analyze site traffic and usage patterns
      • Deliver personalized survey opportunities
      
      You can control cookies through your browser settings. Disabling cookies may affect some features.`
    },
    {
      icon: Globe,
      title: "Google AdSense & Advertising",
      content: `We use Google AdSense to display advertisements on our platform. Google and its partners:
      • Use cookies to serve ads based on your browsing history
      • May use the DoubleClick cookie for interest-based advertising
      • Collect device information for personalized ad delivery
      
      You can opt out of personalized advertising by:
      • Visiting Google Ads Settings: adssettings.google.com
      • Using the Network Advertising Initiative opt-out: networkadvertising.org
      • Adjusting your browser's cookie settings`
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: `You have the right to:
      • Access your personal data
      • Correct inaccurate information
      • Request deletion of your account and data
      • Opt out of marketing communications
      • Export your data
      
      To exercise these rights, contact us at privacy@surveyspay.co.ke. We respond within 30 days.`
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
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2026
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mb-8"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            Surveys Pay (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy applies to our website, mobile applications, and all related services (collectively, the &quot;Platform&quot;).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By using our Platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We comply with the Kenya Data Protection Act, 2019, and other applicable data protection laws. We also participate in the Google AdSense program and follow their policies for advertising and data usage.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary rounded-2xl p-6 md:p-8 mt-8 text-center"
        >
          <h2 className="font-display text-xl font-bold text-primary-foreground mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            If you have any questions or concerns about this Privacy Policy, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@surveyspay.co.ke"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              privacy@surveyspay.co.ke
            </a>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/20 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/30"
            >
              Contact Form
            </button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          This Privacy Policy is effective as of January 2026 and will remain in effect except with respect to any changes in its provisions in the future.
        </motion.p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
