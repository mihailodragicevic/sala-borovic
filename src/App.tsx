import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Toaster as Sonner } from "@/components/ui/sonner";

const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.tsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));

const RouteFallback = () => (
  <div className="min-h-screen bg-background">
    <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 lg:px-8">
      <div className="w-full max-w-3xl animate-pulse rounded-[2rem] border border-border/60 bg-card/40 p-8 shadow-soft">
        <div className="h-4 w-32 rounded-full bg-muted/60" />
        <div className="mt-6 h-12 w-full max-w-2xl rounded-full bg-muted/50" />
        <div className="mt-4 h-12 w-5/6 rounded-full bg-muted/40" />
        <div className="mt-8 h-40 rounded-[1.5rem] bg-muted/30" />
      </div>
    </div>
  </div>
);

const App = () => (
  <>
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nama" element={<AboutPage />} />
          <Route path="/galerija" element={<GalleryPage />} />
          <Route path="/ponude" element={<ServicesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
    </BrowserRouter>
  </>
);

export default App;
