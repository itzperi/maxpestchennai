
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResidentialService from "./pages/services/ResidentialService";
import CommercialService from "./pages/services/CommercialService";
import TermiteControl from "./pages/services/TermiteControl";
import RodentControl from "./pages/services/RodentControl";
import MosquitoControl from "./pages/services/MosquitoControl";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/residential" element={<ResidentialService />} />
            <Route path="/services/commercial" element={<CommercialService />} />
            <Route path="/services/termite-control" element={<TermiteControl />} />
            <Route path="/services/rodent-control" element={<RodentControl />} />
            <Route path="/services/mosquito-control" element={<MosquitoControl />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-now" element={<BookNow />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
