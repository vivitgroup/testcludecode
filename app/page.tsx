import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import CategoriesBento from "@/components/CategoriesBento";
import ProjectsBanner from "@/components/ProjectsBanner";
import CollectionsScroll from "@/components/CollectionsScroll";
import WhyGuthmi from "@/components/WhyGuthmi";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import AIStudioBanner from "@/components/AIStudioBanner";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBadges />
        <CategoriesBento />
        <ProjectsBanner />
        <CollectionsScroll />
        <WhyGuthmi />
        <About />
        <Newsletter />
        <Testimonials />
        <AIStudioBanner />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
