
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VerifluxCaseStudy from "./pages/VerifluxCaseStudy";
import JigsawCaseStudy from "./pages/JigsawCaseStudy";
import { ThemeProvider } from "./hooks/use-theme";
import CustomCursor from "./components/CustomCursor";
import ProtectedCaseStudy from "./components/ProtectedCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/case-study/veriflux" 
              element={
                <ProtectedCaseStudy>
                  <VerifluxCaseStudy />
                </ProtectedCaseStudy>
              } 
            />
            <Route 
              path="/case-study/jigsaw" 
              element={
                <ProtectedCaseStudy>
                  <JigsawCaseStudy />
                </ProtectedCaseStudy>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
