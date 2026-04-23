import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@surveyspay.co.ke", "business@surveyspay.co.ke"],
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 700 123 456"],
      description: "Mon-Fri, 9am - 5pm EAT"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Surveys Pay Technologies Ltd", "Nairobi, Kenya"],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 5PM", "Saturday: 10AM - 2PM"],
      description: "Closed on Sundays & holidays"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have questions? We&apos;re here to help. Reach out to our team through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="bg-card rounded-2xl p-5 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                      <p className="text-xs text-muted-foreground/70 mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-primary/5 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Common Questions</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  • Need help with withdrawals? Check our <button onClick={() => navigate("/faq")} className="text-primary hover:underline">FAQ</button>
                </p>
                <p className="text-muted-foreground">
                  • Having technical issues? Email <a href="mailto:support@surveyspay.co.ke" className="text-primary hover:underline">support@surveyspay.co.ke</a>
                </p>
                <p className="text-muted-foreground">
                  • Business inquiries? Contact <a href="mailto:business@surveyspay.co.ke" className="text-primary hover:underline">business@surveyspay.co.ke</a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="withdrawal">Withdrawal Issues</option>
                    <option value="account">Account Issues</option>
                    <option value="business">Business Partnership</option>
                    <option value="feedback">Feedback / Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Note */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              By submitting this form, you agree to our{" "}
              <button onClick={() => navigate("/privacy")} className="text-primary hover:underline">Privacy Policy</button>
              {" "}and{" "}
              <button onClick={() => navigate("/terms")} className="text-primary hover:underline">Terms of Service</button>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
