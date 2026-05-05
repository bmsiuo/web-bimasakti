import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import TentangKamiPage from "@/pages/TentangKamiPage";
import SolusiPage from "@/pages/SolusiPage";
import BeritaPage from "@/pages/BeritaPage";
import BeritaDetailPage from "@/pages/BeritaDetailPage";
import KarirPage from "@/pages/KarirPage";
import NotFound from "@/pages/NotFound";
import SolutionDetailPage from "@/pages/SolutionDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tentang-kami" element={<TentangKamiPage />} />
              <Route path="/solusi" element={<SolusiPage />} />
              <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
              <Route path="/berita" element={<BeritaPage />} />
              <Route path="/berita/:slug" element={<BeritaDetailPage />} />
              <Route path="/karir" element={<KarirPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
