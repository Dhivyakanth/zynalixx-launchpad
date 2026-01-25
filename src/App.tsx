import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GradientBlobs from "./components/GradientBlobs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookCall from "./pages/BookCall";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen">
          <GradientBlobs />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-call" element={<BookCall />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;