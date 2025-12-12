import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PillarsSection from "./components/pilar4";
import ScheduleSection from "./components/jadwal";
import CardGallery from "./components/CardGallery";
import TestimonialsSection from "./components/testimonials";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <ScheduleSection />
      <CardGallery />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}