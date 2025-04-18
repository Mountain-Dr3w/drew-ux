
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VerifluxCaseStudy from "./pages/VerifluxCaseStudy";
import JigsawCaseStudy from "./pages/JigsawCaseStudy";
import DefTechCaseStudy from "./pages/DefTechCaseStudy";
import { ThemeProvider } from "./hooks/use-theme";
import CustomCursor from "./components/CustomCursor";
import ProtectedCaseStudy from "./components/ProtectedCaseStudy";

const queryClient = new QueryClient();

const ProtectedRoute = ({ path, element }: { path: string, element: React.ReactNode }) => {
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
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <main className="flex-1 w-full max-w-7xl mx-auto">
                <div className="sticky top-0 z-50">
                  <SidebarTrigger className="m-4" />
                </div>
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
