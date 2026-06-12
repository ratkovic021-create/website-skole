import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import PasswordGate from "@/components/PasswordGate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LanguagesMarquee from "@/components/LanguagesMarquee";
import About from "@/components/About";
import Languages from "@/components/Languages";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Home = () => {
  return (
    <div data-testid="home-page" className="bg-paper text-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LanguagesMarquee />
        <About />
        <Languages />
        <Services />
        <Location />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <PasswordGate>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PasswordGate>
    </LanguageProvider>
  );
}

export default App;
