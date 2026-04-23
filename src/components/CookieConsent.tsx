import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronDown, ChevronUp } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    advertising: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    
    // Enable Google AdSense if advertising cookies are accepted
    if (allAccepted.advertising) {
      enableGoogleAdsense();
    }
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    
    // Enable Google AdSense only if advertising cookies are accepted
    if (preferences.advertising) {
      enableGoogleAdsense();
    }
  };

  const handleRejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(minimal));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const enableGoogleAdsense = () => {
    // This will be used to trigger AdSense loading
    window.dispatchEvent(new CustomEvent("cookie-consent-given", { detail: { advertising: true } }));
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't toggle necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-premium border border-border p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Cookie Preferences</h3>
                    <p className="text-sm text-muted-foreground">We use cookies to enhance your experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                We use cookies and similar technologies to provide our services, understand how you use our platform, 
                personalize your experience, and show you relevant advertisements (including from Google AdSense). 
                You can customize your preferences or accept all cookies. Read our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for more details.
              </p>

              {/* Expandable Details */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-sm font-medium text-primary mb-4 hover:opacity-80"
              >
                {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showDetails ? "Hide Details" : "Customize Preferences"}
              </button>

              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 mb-4"
                >
                  {/* Necessary Cookies - Always On */}
                  <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                    <div>
                      <p className="font-medium text-sm text-foreground">Necessary</p>
                      <p className="text-xs text-muted-foreground">Required for the site to function</p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-primary-foreground rounded-full ml-auto" />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div 
                    className="flex items-center justify-between p-3 bg-muted rounded-xl cursor-pointer"
                    onClick={() => togglePreference("analytics")}
                  >
                    <div>
                      <p className="font-medium text-sm text-foreground">Analytics</p>
                      <p className="text-xs text-muted-foreground">Helps us improve our website</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.analytics ? "bg-primary" : "bg-muted-foreground/30"}`}>
                      <div className={`w-4 h-4 bg-primary-foreground rounded-full transition-transform ${preferences.analytics ? "translate-x-6" : "translate-x-0"}`} />
                    </div>
                  </div>

                  {/* Advertising Cookies */}
                  <div 
                    className="flex items-center justify-between p-3 bg-muted rounded-xl cursor-pointer"
                    onClick={() => togglePreference("advertising")}
                  >
                    <div>
                      <p className="font-medium text-sm text-foreground">Advertising</p>
                      <p className="text-xs text-muted-foreground">Personalized ads from Google AdSense</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.advertising ? "bg-primary" : "bg-muted-foreground/30"}`}>
                      <div className={`w-4 h-4 bg-primary-foreground rounded-full transition-transform ${preferences.advertising ? "translate-x-6" : "translate-x-0"}`} />
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div 
                    className="flex items-center justify-between p-3 bg-muted rounded-xl cursor-pointer"
                    onClick={() => togglePreference("functional")}
                  >
                    <div>
                      <p className="font-medium text-sm text-foreground">Functional</p>
                      <p className="text-xs text-muted-foreground">Enhanced features and personalization</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.functional ? "bg-primary" : "bg-muted-foreground/30"}`}>
                      <div className={`w-4 h-4 bg-primary-foreground rounded-full transition-transform ${preferences.functional ? "translate-x-6" : "translate-x-0"}`} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {showDetails ? (
                  <>
                    <button
                      onClick={handleAcceptSelected}
                      className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                    >
                      Reject All
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                    >
                      Reject Non-Essential
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
