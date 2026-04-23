import { useEffect, useRef, useState } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  style?: React.CSSProperties;
  className?: string;
}

// Extend Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Google AdSense Component
 * 
 * To use this component:
 * 1. Get your AdSense Publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
 * 2. Create ad slots in your AdSense dashboard
 * 3. Replace PUBLISHER_ID with your actual ID below
 * 4. Use the adSlot prop to specify which ad unit to display
 * 
 * IMPORTANT: Don't forget to update the PUBLISHER_ID constant below!
 */
const PUBLISHER_ID = "ca-pub-3351121121463213"; // Your AdSense Publisher ID

export const AdSenseScript = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if user has given cookie consent for advertising
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        const parsed = JSON.parse(consent);
        if (parsed.advertising) {
          setConsentGiven(true);
        }
      }
    };

    checkConsent();

    // Listen for consent updates
    const handleConsent = () => checkConsent();
    window.addEventListener("cookie-consent-given", handleConsent);
    window.addEventListener("storage", handleConsent);

    return () => {
      window.removeEventListener("cookie-consent-given", handleConsent);
      window.removeEventListener("storage", handleConsent);
    };
  }, []);

  useEffect(() => {
    if (!consentGiven) return;

    // Load AdSense script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      // Cleanup is optional but good practice
      const existingScript = document.querySelector(`script[src*="${PUBLISHER_ID}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [consentGiven]);

  return null;
};

const AdSense = ({ adSlot, adFormat = "auto", style, className = "" }: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check cookie consent
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        const parsed = JSON.parse(consent);
        setConsentGiven(parsed.advertising === true);
      }
    };

    checkConsent();
    window.addEventListener("cookie-consent-given", checkConsent);
    return () => window.removeEventListener("cookie-consent-given", checkConsent);
  }, []);

  useEffect(() => {
    if (!consentGiven) return;

    // Intersection Observer to only load ad when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, [consentGiven]);

  useEffect(() => {
    if (isVisible && consentGiven && adRef.current) {
      try {
        if (typeof window !== "undefined") {
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [isVisible, consentGiven]);

  // Don't render if no consent
  if (!consentGiven) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center ${className}`}
        style={{ minHeight: "100px", ...style }}
      >
        <p className="text-xs text-muted-foreground text-center px-4">
          Advertising is disabled. Enable cookies to see relevant offers.
        </p>
      </div>
    );
  }

  const getAdSize = () => {
    switch (adFormat) {
      case "rectangle":
        return { width: "300", height: "250" };
      case "vertical":
        return { width: "160", height: "600" };
      case "horizontal":
        return { width: "728", height: "90" };
      default:
        return { width: "", height: "" };
    }
  };

  const { width, height } = getAdSize();

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          ...style,
        }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={adFormat === "auto" ? "true" : undefined}
        {...(width && { width })}
        {...(height && { height })}
      />
    </div>
  );
};

// Predefined ad placements for common positions
export const AdSenseTopBanner = () => (
  <AdSense 
    adSlot="top-banner-slot" 
    adFormat="horizontal" 
    style={{ width: "100%", maxWidth: "728px", height: "90px", margin: "0 auto" }}
    className="my-4"
  />
);

export const AdSenseSidebar = () => (
  <AdSense 
    adSlot="sidebar-slot" 
    adFormat="vertical" 
    style={{ width: "160px", height: "600px" }}
    className="hidden lg:block"
  />
);

export const AdSenseInArticle = () => (
  <AdSense 
    adSlot="in-article-slot" 
    adFormat="rectangle" 
    style={{ width: "100%", maxWidth: "300px", height: "250px", margin: "0 auto" }}
    className="my-6"
  />
);

export const AdSenseResponsive = ({ className = "" }: { className?: string }) => (
  <AdSense 
    adSlot="responsive-slot" 
    adFormat="auto" 
    style={{ display: "block", width: "100%" }}
    className={`my-4 ${className}`}
  />
);

export default AdSense;
