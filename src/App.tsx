
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VerifluxCaseStudy from "./pages/VerifluxCaseStudy";
import JigsawCaseStudy from "./pages/JigsawCaseStudy";
import DefTechCaseStudy from "./pages/DefTechCaseStudy";
import DebriefCaseStudy from "./pages/DebriefCaseStudy";
import { ThemeProvider } from "./hooks/use-theme";
import CustomCursor from "./components/CustomCursor";
import ProtectedCaseStudy from "./components/ProtectedCaseStudy";

const queryClient = new QueryClient();

// Wrapper to handle redirects with location state
const ProtectedRoute = ({ path, element }: { path: string, element: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <ProtectedCaseStudy>
      {element}
    </ProtectedCaseStudy>
  );
};

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
                <ProtectedRoute 
                  path="/case-study/veriflux"
                  element={<VerifluxCaseStudy />}
                />
              } 
            />
            <Route 
              path="/case-study/jigsaw" 
              element={
                <ProtectedRoute 
                  path="/case-study/jigsaw"
                  element={<JigsawCaseStudy />}
                />
              } 
            />
            <Route 
              path="/case-study/deftech" 
              element={
                <ProtectedRoute 
                  path="/case-study/deftech"
                  element={<DefTechCaseStudy />}
                />
              } 
            />
            <Route 
              path="/case-study/debrief" 
              element={
                <ProtectedRoute 
                  path="/case-study/debrief"
                  element={<DebriefCaseStudy />}
                />
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
