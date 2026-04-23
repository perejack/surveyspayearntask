import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, MessageCircle, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      questions: [
        {
          q: "What is Surveys Pay and how does it work?",
          a: "Surveys Pay is a premium survey platform that connects Kenyan consumers with brands and organizations seeking feedback. You create a free account, complete your profile, and we match you with relevant surveys. Each completed survey earns you rewards that can be withdrawn directly to your M-Pesa. The process is simple: sign up → complete surveys → earn rewards → withdraw to M-Pesa."
        },
        {
          q: "Is Surveys Pay free to join?",
          a: "Yes! Creating an account and participating in surveys is completely free. There are no hidden fees or subscription costs. We believe everyone should have the opportunity to earn from their opinions without upfront investment."
        },
        {
          q: "Who can join Surveys Pay?",
          a: "Surveys Pay is currently available to residents of Kenya who are 18 years or older. You need a valid Kenyan phone number for M-Pesa withdrawals and an active email address. We're working on expanding to other African countries soon."
        },
        {
          q: "How do I create an account?",
          a: "Click the 'Get Started' button, enter your email address and create a password. You'll receive a verification email to confirm your account. Once verified, complete your profile with accurate demographic information to receive more survey opportunities."
        }
      ]
    },
    {
      category: "Earnings & Payments",
      icon: "💰",
      questions: [
        {
          q: "How much can I earn per survey?",
          a: "Survey rewards vary based on length, complexity, and target demographic. Most surveys pay between KSH 20 and KSH 150. Premium surveys with specific demographic requirements can pay up to KSH 500 or more. Longer surveys (15-30 minutes) typically offer higher rewards than quick 5-minute surveys."
        },
        {
          q: "What is the minimum withdrawal amount?",
          a: "The minimum withdrawal amount is KSH 2,500. This threshold helps us maintain efficient payment processing and minimize transaction fees. Once you reach this amount, you can request a withdrawal anytime through your dashboard."
        },
        {
          q: "How do I withdraw my earnings?",
          a: "Go to your dashboard and click 'Withdraw'. Enter your M-Pesa number and the amount you want to withdraw (minimum KSH 2,500). Confirm the withdrawal request. Funds are typically processed within 1-3 business days, though most withdrawals complete within 24 hours."
        },
        {
          q: "Are there any fees for withdrawals?",
          a: "Surveys Pay does not charge any withdrawal fees. However, standard M-Pesa transaction fees apply as per Safaricom's rates. These fees are deducted from the withdrawn amount. We recommend withdrawing larger amounts less frequently to minimize transaction costs."
        },
        {
          q: "Why was my withdrawal delayed or rejected?",
          a: "Delays can occur due to: (1) Incorrect M-Pesa number provided, (2) Account verification pending, (3) Unusual activity flagged for security review, (4) Bank holidays or weekends affecting processing. If rejected, check that your M-Pesa number is correct and your account is fully verified. Contact support if issues persist."
        }
      ]
    },
    {
      category: "Surveys & Categories",
      icon: "📊",
      questions: [
        {
          q: "What types of surveys are available?",
          a: "We offer surveys across multiple categories: Technology (apps, gadgets, software), Lifestyle (fashion, travel, dining), FMCG (food, beverages, household products), Education (learning platforms, courses), Health (wellness, medical services), and Entertainment (movies, music, gaming). New categories are added regularly."
        },
        {
          q: "How often will I receive surveys?",
          a: "Survey frequency depends on your profile completeness and current market research demand. Users with complete profiles typically receive 3-7 surveys per week. Some weeks may have more opportunities than others based on client demand. Enable notifications to never miss a survey."
        },
        {
          q: "Why don't I qualify for some surveys?",
          a: "Surveys often target specific demographics (age, location, income, interests). If you don't qualify, it means your profile doesn't match the client's target audience. Don't get discouraged—new surveys are added daily, and you'll qualify for many others. Complete your profile fully to maximize matching."
        },
        {
          q: "What happens if I start but don't finish a survey?",
          a: "Incomplete surveys typically don't earn rewards. However, if you experience technical issues, contact support with the survey ID and we'll investigate. Some surveys allow you to resume within a limited time window. We recommend completing surveys in one sitting for the best experience."
        },
        {
          q: "Can I retake the same survey?",
          a: "No, each survey can only be completed once per user. Attempting to complete the same survey multiple times violates our Terms of Service and may result in account suspension. We track responses to ensure data integrity for our clients."
        }
      ]
    },
    {
      category: "Account & Security",
      icon: "🔒",
      questions: [
        {
          q: "Is my personal information safe?",
          a: "We use bank-level SSL encryption to protect your data. Your personal information is never sold to third parties. Survey responses are anonymized and aggregated before sharing with clients. We comply with Kenya's Data Protection Act, 2019 and international privacy standards."
        },
        {
          q: "How do I verify my account?",
          a: "Account verification happens in two steps: (1) Email verification through the link sent to your registered email, (2) Phone verification via SMS code sent to your M-Pesa number. Some high-value withdrawals may require additional identity verification for security."
        },
        {
          q: "Can I have multiple accounts?",
          a: "No. Our policy is one account per person. Creating multiple accounts is considered fraud and will result in immediate termination of all associated accounts and forfeiture of earnings. We use advanced detection systems to identify duplicate accounts."
        },
        {
          q: "What should I do if I forgot my password?",
          a: "Click 'Forgot Password' on the login page, enter your registered email address, and we'll send a password reset link. The link expires after 24 hours for security. If you don't receive the email, check your spam folder or contact support."
        }
      ]
    },
    {
      category: "Packages & Upgrades",
      icon: "⭐",
      questions: [
        {
          q: "What are survey packages?",
          a: "Survey packages unlock additional survey opportunities beyond the free tier. Free accounts have access to basic surveys with earning limits. Upgrading to Bronze, Silver, or Gold packages removes earning caps and provides access to premium, higher-paying surveys."
        },
        {
          q: "Do I need to buy a package to earn?",
          a: "No, you can earn with a free account. However, free accounts have earning limits. Once you reach the free tier limit, you'll need to upgrade to continue earning. Packages are designed for serious earners who want to maximize their income potential."
        },
        {
          q: "How do packages work?",
          a: "Packages are one-time purchases that unlock survey categories for a specific period. Each package tier provides access to different categories and removes earning restrictions. Choose a package based on the categories you're most interested in and your earning goals."
        },
        {
          q: "Can I get a refund on a package?",
          a: "Package purchases are generally non-refundable once surveys have been accessed. However, if you experience technical issues that prevent access to purchased surveys, contact our support team within 7 days for assistance. We handle refund requests on a case-by-case basis."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: "🔧",
      questions: [
        {
          q: "The survey won't load. What should I do?",
          a: "Try these steps: (1) Check your internet connection, (2) Clear your browser cache and cookies, (3) Try a different browser (Chrome, Firefox, Safari), (4) Disable browser extensions temporarily, (5) Ensure JavaScript is enabled. If problems persist, contact support with the survey ID."
        },
        {
          q: "I completed a survey but didn't receive credit",
          a: "Survey credits typically appear within 5-30 minutes. If not credited after 24 hours: (1) Check your 'Completed Surveys' history, (2) Ensure you completed all required questions, (3) Verify you didn't rush through (quality checks may disqualify rushed responses). Contact support with survey details if still missing."
        },
        {
          q: "Why can't I access the website?",
          a: "Check if Surveys Pay is down for maintenance (check our social media for updates). If it's just you: (1) Test your internet connection, (2) Try accessing from a different device, (3) Check if your ISP is blocking the site, (4) Disable VPN if using one. Contact support if issues continue."
        },
        {
          q: "My earnings disappeared or are incorrect",
          a: "First, refresh your dashboard. Check your 'Transaction History' for any withdrawals you may have forgotten. Earnings may be deducted if a survey response failed quality checks. If you believe there's an error, screenshot your history and contact support immediately."
        }
      ]
    }
  ];

  // Filter questions based on search
  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

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
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find answers to common questions about using Surveys Pay. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-12"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="font-display text-xl font-bold text-foreground">
                  {category.category}
                </h2>
              </div>
              
              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const globalIndex = catIndex * 100 + index;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={index}
                      className="bg-card rounded-2xl shadow-card overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No results found for &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-primary hover:underline mt-2"
            >
              Clear search
            </button>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary rounded-2xl p-8 mt-12 text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="font-display text-xl font-bold text-primary-foreground mb-3">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Our support team is here to help you with any questions or concerns.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
