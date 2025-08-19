import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import PeintureInterieure from "@/pages/services/peinture-interieure";
import RevetementsMuraux from "@/pages/services/revetements-muraux";
import EstimationGratuite from "@/pages/services/estimation-gratuite";
import ConseilExpert from "@/pages/services/conseil-expert";
import TirageJoints from "@/pages/services/tirage-joints";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/peinture-interieure" component={PeintureInterieure} />
        <Route path="/services/revetements-muraux" component={RevetementsMuraux} />
        <Route path="/services/estimation-gratuite" component={EstimationGratuite} />
        <Route path="/services/conseil-expert" component={ConseilExpert} />
        <Route path="/services/tirage-joints" component={TirageJoints} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
