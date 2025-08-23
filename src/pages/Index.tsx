import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import ChatModal from "@/components/ChatModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      {/* <ChatModal /> */}
    </div>
  );
};

export default Index;
