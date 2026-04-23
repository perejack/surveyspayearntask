import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import CookieConsent from "@/components/CookieConsent";
import { AdSenseScript } from "@/components/AdSense";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import SurveyPage from "./pages/SurveyPage";
import Profile from "./pages/Profile";
import Packages from "./pages/Packages";
import Withdraw from "./pages/Withdraw";
import UnlockCategories from "./pages/UnlockCategories";
import CategorySurveys from "./pages/CategorySurveys";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import EarningsGuide from "./pages/EarningsGuide";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AdSenseScript />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/earnings-guide" element={<EarningsGuide />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/survey/:id" element={<ProtectedRoute><SurveyPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/packages" element={<ProtectedRoute><Packages /></ProtectedRoute>} />
            <Route path="/withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
            <Route path="/unlock-categories" element={<ProtectedRoute><UnlockCategories /></ProtectedRoute>} />
            <Route path="/category/:categoryId" element={<ProtectedRoute><CategorySurveys /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieConsent />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
