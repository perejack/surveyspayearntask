import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Wallet, Ban, Gavel, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: `By accessing or using the Surveys Pay platform ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.

      We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Platform constitutes acceptance of the updated Terms.

      You must be at least 18 years old and a resident of Kenya to use this Platform. By using Surveys Pay, you represent and warrant that you meet these eligibility requirements.`
    },
    {
      icon: FileText,
      title: "Account Registration & Security",
      content: `To use Surveys Pay, you must create an account. You agree to:
      • Provide accurate, current, and complete information
      • Maintain the security of your password and account
      • Notify us immediately of any unauthorized access
      • Accept responsibility for all activities under your account

      We reserve the right to suspend or terminate accounts that:
      • Provide false information
      • Attempt to manipulate survey responses
      • Create multiple accounts (one person, one account policy)
      • Engage in fraudulent activity`
    },
    {
      icon: Wallet,
      title: "Earnings & Payments",
      content: `Survey Rewards:
      • Each survey displays the reward amount before you begin
      • Rewards are credited after survey completion and quality review
      • We reserve the right to withhold rewards for incomplete or fraudulent responses
      • Reward amounts are subject to change without notice

      Withdrawals:
      • Minimum withdrawal amount: KSH 2,500
      • Payments are processed to your registered M-Pesa number
      • Processing time: 1-3 business days
      • You are responsible for providing accurate M-Pesa details
      • We are not liable for payments sent to incorrect numbers provided by you

      Taxes: You are solely responsible for reporting and paying any applicable taxes on your earnings.`
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: `You agree NOT to:
      • Use automated tools, bots, or scripts to complete surveys
      • Provide false or misleading information in responses
      • Complete the same survey multiple times
      • Attempt to hack, disrupt, or damage the Platform
      • Share survey content or questions with third parties
      • Transfer or sell your account to another person
      • Use VPNs or other methods to circumvent location requirements
      • Harass, abuse, or harm other users or our staff

      Violations will result in immediate account termination and forfeiture of all earnings.`
    },
    {
      icon: Ban,
      title: "Termination",
      content: `We may suspend or terminate your account at any time, with or without cause, including for:
      • Violation of these Terms
      • Extended periods of inactivity (12+ months)
      • Fraudulent or suspicious activity
      • At your request

      Upon termination:
      • Your right to use the Platform immediately ceases
      • Unpaid earnings below the minimum threshold may be forfeited
      • Your account data will be handled per our Privacy Policy
      • You remain liable for any breaches of these Terms

      You may delete your account at any time by contacting support. Remaining eligible earnings will be processed according to our withdrawal policy.`
    },
    {
      icon: Gavel,
      title: "Disclaimer of Warranties",
      content: `THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

      We do not guarantee:
      • Uninterrupted or error-free service
      • Specific earning amounts or survey availability
      • That surveys will always match your profile
      • That any errors will be corrected

      Survey opportunities and reward amounts vary based on:
      • Client demand and budget
      • Your demographic profile
      • Survey completion rates
      • Seasonal fluctuations

      We are not responsible for third-party survey content or advertiser claims.`
    },
    {
      icon: MessageSquare,
      title: "Intellectual Property",
      content: `All content on the Platform, including but not limited to:
      • Text, graphics, logos, and images
      • Software and code
      • Survey designs and formats
      • Trademarks and branding

      is the property of Surveys Pay or its licensors and is protected by copyright, trademark, and other intellectual property laws.

      You may not:
      • Copy, modify, or distribute our content without permission
      • Use our trademarks without written consent
      • Reverse engineer any part of the Platform
      • Create derivative works based on our services

      User-generated content (survey responses) becomes our property for aggregation and analysis purposes, though personal identifiers are handled per our Privacy Policy.`
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
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Please read these terms carefully before using the Surveys Pay platform.
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
            Welcome to Surveys Pay! These Terms of Service (&quot;Terms&quot;) govern your use of our website, mobile applications, and related services (collectively, the &quot;Platform&quot;) operated by Surveys Pay Technologies Ltd (&quot;Surveys Pay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By accessing or using the Platform, you agree to comply with and be bound by these Terms. Please read them carefully. If you do not agree to these Terms, you should not access or use the Platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of the Republic of Kenya. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of Kenya.
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

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mt-6"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SURVEYS PAY SHALL NOT BE LIABLE FOR:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or goodwill</li>
            <li>Service interruptions or technical failures</li>
            <li>Unauthorized access to your data or account</li>
            <li>Third-party conduct or content</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Our total liability for any claims shall not exceed the amount you paid us (if any) in the 12 months preceding the claim, or KSH 1,000, whichever is greater.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mt-6"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Indemnification
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to indemnify, defend, and hold harmless Surveys Pay, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from or relating to: (a) your use of the Platform; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) your conduct in connection with the Platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card mt-6"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Governing Law & Disputes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Any dispute arising from or relating to these Terms or the Platform shall first be attempted to be resolved through good faith negotiations. If negotiations fail, the dispute shall be submitted to mediation in Nairobi, Kenya. If mediation is unsuccessful, the dispute shall be resolved through arbitration under the Arbitration Act of Kenya.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You waive any right to participate in class action lawsuits or class-wide arbitration.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="bg-primary rounded-2xl p-6 md:p-8 mt-8 text-center"
        >
          <h2 className="font-display text-xl font-bold text-primary-foreground mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@surveyspay.co.ke"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              legal@surveyspay.co.ke
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
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Surveys Pay Technologies Ltd<br />
          Nairobi, Kenya<br />
          © 2026 All Rights Reserved
        </motion.p>
      </div>
    </div>
  );
};

export default TermsOfService;
